'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shelves', [
      {
        shelfName: 'Interested',
        userId: 1,
        type: 'Not Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 1,
        type: 'Tracked'
      },
      {
        shelfName: 'On-Off Playing',
        userId: 1,
        type: 'Ongoing'
      },
      {
        shelfName: 'Completed',
        userId: 1,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 2,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 3,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 4,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 5,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 6,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 7,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 8,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 9,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 10,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 11,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 12,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 13,
        type: 'Tracked'
      },
      {
        shelfName: 'Playing',
        userId: 14,
        type: 'Tracked'
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Shelves', {
    }, {});
  }
};