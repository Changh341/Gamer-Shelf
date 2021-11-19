const express = require('express');
const asyncHandler = require('express-async-handler');

const { Game, Review, Shelf } = require('../../db/models');

const router = express.Router();

router.get('/:id/games', asyncHandler(async (req, res) => {
  const { id } = req.params
  const games = await Game.findAll({
    where: { shelfId: id },
    include: Review,
    order: [
      ['name', 'ASC'],
    ],
  })
  if (games) {
    res.json(games)
  }
}))

router.post('/:id/games', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, user } = req.body;
  const newGame = await Game.create({
    name,
    shelfId: id,
    status: 'Not Purchased',
    hoursProgressed: 0.0
  })
  if (newGame) {
    const game = await Game.findOne({
      include: [{
        model: Shelf,
        attributes: ['shelfName'],
        where: { userId: user }
      },
      { model: Review }],
      attributes: ['name']
    })
    res.json(game)
  }
}))

router.put('/:id/games/:gameId', asyncHandler(async (req, res) => {
  const { gameId } = req.params
  const { status, hoursProgressed, shelfId } = req.body
  const updated = await Game.update({
    status,
    shelfId,
    hoursProgressed
  }, { where: { id: gameId } })

  if (updated) {
    return res.json(updated)
  }
}))

router.delete('/:id/games/:gameId', asyncHandler(async (req, res) => {
  const { gameId } = req.params

  const game = await Game.findByPk(gameId)

  if (game) {
    const deletion = await Game.destroy({ where: { id: gameId } })
    if (deletion) {
      return res.json({ message: 'success' })
    }
  }
}))

module.exports = router;