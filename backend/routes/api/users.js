const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Shelf, Game, Review } = require('../../db/models');


const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

router.get('/:user/shelves', asyncHandler(async (req, res) => {
  const { user } = req.params
  const shelves = await Shelf.findAll({ where: { userId: user } })
  if (shelves) {
    res.json(shelves)
  }
}))

router.post('/:user/shelves', asyncHandler(async (req, res) => {
  const { shelfName, type } = req.body
  const { user } = req.params
  const newShelf = await Shelf.create({
    shelfName,
    userId: user,
    type
  })
  if (newShelf) {
    res.json(newShelf)
  }
}))

router.put('/:user/shelves/:shelfId', asyncHandler(async (req, res) => {
  const { shelfId } = req.params
  const { shelfName, type } = req.body
  const updated = await Shelf.update({
    shelfName,
    type
  }, { where: { id: shelfId } })

  if (updated) {
    return res.json(updated)
  }
}
))

router.delete('/:user/shelves/:shelfId', asyncHandler(async (req, res) => {
  const { shelfId } = req.params

  const shelf = await Shelf.findByPk(shelfId)

  if (shelf) {
    const deletion = await Shelf.destroy({ where: { id: shelfId } })
    if (deletion) {
      return res.json({ message: 'success' })
    }
  }
}))

router.get('/:user/games', asyncHandler(async (req, res) => {
  const { user } = req.params
  const games = await Game.findAll({
    include: [{
      model: Shelf,
      attributes: ['shelfName'],
      where: { userId: user }
    },
    { model: Review }],
    attributes: ['name']
  })
  if (games) {
    res.json(games)
  }
}))


module.exports = router;