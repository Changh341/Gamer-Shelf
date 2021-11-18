const express = require('express');
const asyncHandler = require('express-async-handler');

const { Game, Review } = require('../../db/models');

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
  const { name } = req.body;
  const newGame = await Shelf.create({
    name,
    shelfId: id,
    status: 'Not Purchased',
    hoursProgressed: 0.0
  })
  if (newGame) {
    res.json(newGame)
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