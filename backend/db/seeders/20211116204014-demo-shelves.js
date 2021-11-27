'use strict';
const faker = require('faker');
const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let shelves = []
    const users = await User.findAll()
    users.map((user) => {
      shelves.push({
        shelfName: 'Playing',
        userId: user.id,
        type: 'Tracked'
      })
    })
    return queryInterface.bulkInsert('Shelves', shelves)
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Shelves', {
    }, {});
  }
};