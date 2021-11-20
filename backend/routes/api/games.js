const express = require('express');
const asyncHandler = require('express-async-handler');

const games = require('../../data/games.json');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  res.send(games)
}))

router.get('/:name/images', asyncHandler(async (req, res) => {
  const { name } = req.params
  const gameImage = games[name].imageURL
  if (games[name]) {
    res.json(gameImage)
  } else {
    res.send(null)
  }
}))

module.exports = router;