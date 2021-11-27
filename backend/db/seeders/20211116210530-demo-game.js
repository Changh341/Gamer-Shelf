'use strict';
const faker = require('faker');
const { Shelf } = require('../models')
const titles = require('../../data/games.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let count = 0
    let games = []
    let titleKeys = Object.keys(titles)
    const shelves = await Shelf.findAll()
    for (let i = 0; i < 15; i++) {
      shelves.map((shelf) => {
        games.push({
          name: titleKeys[count],
          shelfId: shelf.id,
          status: 'Playing',
          hoursProgressed: 2.0
        })
        if (count === 84) {
          count = 0
        } else {
          count += 1
        }
      })
    }


    return queryInterface.bulkInsert('Games', games);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Games', {
    }, {});
  }
};