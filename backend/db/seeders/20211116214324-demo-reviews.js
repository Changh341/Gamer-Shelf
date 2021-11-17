'use strict';
const faker = require('faker');

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 5
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 6
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 7
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 8
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 9
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 10
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 11
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 12
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 13
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 14
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 15
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 16
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 17
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 18
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 19
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 20
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 21
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 22
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 23
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 24
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 25
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 26
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 27
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 28
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 29
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 30
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 31
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 32
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 33
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 34
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 35
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 36
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 37
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 38
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 39
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 40
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 41
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 42
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 43
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 44
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 45
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 46
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 47
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 48
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 49
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 50
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 51
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 52
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 53
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 54
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 55
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 56
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 57
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 58
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 59
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 60
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 61
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 62
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 63
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 64
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 65
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 66
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 67
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 68
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 69
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 70
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 71
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 72
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 73
      },
      {
        content: faker.lorem.sentence(),
        rating: randomNumber(1, 6),
        gameId: 74
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
    }, {});
  }
};