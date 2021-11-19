const express = require('express');
const asyncHandler = require('express-async-handler');

const games = require('../../data/games.json');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  res.send(games)
}))

module.exports = router;