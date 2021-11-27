'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [{
      email: 'demo@user.io',
      username: 'DemoMAN',
      hashedPassword: bcrypt.hashSync('password123')
    }]

    for (let i = 0; i < 31; i++) {
      users.push({
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: 'd1e8a70b5ccab1dc2f56bbf7e99f064a660c08e361a35751b9'
      });
    }
    return queryInterface.bulkInsert('Users', users);
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: {
        [Op.in]:
          ['DemoMAN']
      }
    }, {});
  }
};