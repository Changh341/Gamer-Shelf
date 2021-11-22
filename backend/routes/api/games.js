const { Game, Review, Shelf, User } = require('../../db/models');

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

router.get('/:name/reviews', asyncHandler(async (req, res) => {
  const { name } = req.params
  const reviews = await Game.findAll({
    include: [{
      model: Shelf,
      attributes: ['id'],
      include: { model: User, attributes: ['username'] }
    },
    { model: Review }],
    where: { name: name },
    attributes: ['name']
  })
  if (reviews) {
    res.json(reviews)
  } else {
    res.send(null)
  }
}))

router.post('/:id/reviews', asyncHandler(async (req, res) => {
  const { id } = req.params
  const { rating, content } = req.body
  const newReview = await Review.create({
    content,
    rating,
    gameId: id
  })
  if (newReview) {
    const response = await Game.findOne({
      include: [{
        model: Shelf,
        attributes: ['id'],
        include: { model: User, attributes: ['username'] }
      },
      { model: Review }],
      where: { id },
      attributes: ['name', 'id']
    })
    res.json(response)
  }
}))

router.put('/:id/reviews', asyncHandler(async (req, res) => {
  const { id } = req.params
  const { rating, content, reviewId } = req.body
  const review = await Review.update({
    content,
    rating,
  }, { where: { id: reviewId } })
  if (review) {
    const response = await Game.findOne({
      include: [{
        model: Shelf,
        attributes: ['id'],
        include: { model: User, attributes: ['username'] }
      },
      { model: Review }],
      where: { id },
      attributes: ['name', 'id']
    })
    res.json(response)
  }
}))

router.delete('/:id/reviews', asyncHandler(async (req, res) => {
  const { reviewId } = req.body
  const review = await Game.findOne({
    include: [{
      model: Shelf,
      attributes: ['id'],
      include: { model: User, attributes: ['username'] }
    },
    {
      model: Review,
      where: { id: reviewId }
    }],
    attributes: ['name']
  })
  if (review) {
    const deletion = await Review.destroy({
      where: { id: reviewId }
    })
    if (deletion) {
      res.json(review)
    }
  }
}))

module.exports = router;