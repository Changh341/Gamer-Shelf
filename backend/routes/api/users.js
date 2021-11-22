const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const faker = require('faker')

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
    attributes: ['name', 'id']
  })
  if (games) {
    res.json(games)
  }
}))

router.get('/:user/games/all', asyncHandler(async (req, res) => {
  const { user } = req.params
  const games = await Game.findAll({
    include: [{
      model: Shelf,
      attributes: ['shelfName'],
      where: { userId: user }
    },
    { model: Review }],
  })
  if (games) {
    res.json(games)
  }
}))

router.post('/demo', asyncHandler(async (req, res) => {
  const randomRating = Math.floor(Math.random() * 5) + 1;
  const email = faker.internet.email()
  const username = faker.internet.userName()
  const password = faker.internet.password()

  const user = await User.signup({ email, username, password });
  const newShelf = await Shelf.create({
    shelfName: 'Interested',
    userId: user.id,
    type: 'Not Tracked'
  })
  const newShelf1 = await Shelf.create({
    shelfName: 'Playing',
    userId: user.id,
    type: 'Tracked'
  })
  const newShelf2 = await Shelf.create({
    shelfName: 'On-Off Playing',
    userId: user.id,
    type: 'Ongoing'
  })
  const newShelf3 = await Shelf.create({
    shelfName: 'Completed',
    userId: user.id,
    type: 'Tracked'
  })
  const newGame = await Game.create({
    name: 'Bioshock',
    shelfId: newShelf.id,
    status: 'Not Purchased',
    hoursProgressed: 0.0
  })
  const newGame1 = await Game.create({
    name: 'Battlefield 4',
    shelfId: newShelf1.id,
    status: 'Playing',
    hoursProgressed: 3.0
  })

  const newGame2 = await Game.create({
    name: 'Minecraft',
    shelfId: newShelf2.id,
    status: 'Stopped',
    hoursProgressed: 194.0
  })

  const newGame3 = await Game.create({
    name: 'Raft',
    shelfId: newShelf3.id,
    status: 'Completed',
    hoursProgressed: 51.0
  })

  const newReview = await Review.create({
    content: faker.lorem.sentence(),
    rating: randomRating,
    gameId: newGame3.id
  })


  await setTokenCookie(res, user);

  return res.json({
    user,
  });
}),
);



module.exports = router;