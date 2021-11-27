'use strict';
const faker = require('faker');
const { Game } = require('../models')

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const weightedRatings = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let reviews = []
    const games = await Game.findAll()
    games.map((game) => {
      reviews.push({
        content: faker.lorem.sentence(),
        rating: weightedRatings[randomNumber(0, 10)],
        gameId: game.id
      })
    })

    return queryInterface.bulkInsert('Reviews', reviews);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
    }, {});
  }
};