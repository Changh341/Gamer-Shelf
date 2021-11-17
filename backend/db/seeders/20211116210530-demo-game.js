'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      {
        name: 'Bioshock',
        shelfId: 1,
        status: 'Not Purchased',
        hoursProgressed: 0
      },
      {
        name: 'Persona 4',
        shelfId: 1,
        status: 'Not Purchased',
        hoursProgressed: 0
      },
      {
        name: 'Halo 3',
        shelfId: 2,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Raft',
        shelfId: 3,
        status: 'Playing',
        hoursProgressed: 6
      },
      {
        name: 'Last of Us',
        shelfId: 4,
        status: 'Completed',
        hoursProgressed: 21
      },
      {
        name: 'Bioshock',
        shelfId: 5,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Bioshock',
        shelfId: 6,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Bioshock',
        shelfId: 7,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Bioshock',
        shelfId: 8,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Halo 3',
        shelfId: 9,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Halo 3',
        shelfId: 10,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Halo 3',
        shelfId: 11,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Last of Us',
        shelfId: 12,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Last of Us',
        shelfId: 13,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Last of Us',
        shelfId: 14,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Last of Us',
        shelfId: 15,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Battlefield 4',
        shelfId: 16,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Battlefield 4',
        shelfId: 17,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Battlefield 4',
        shelfId: 5,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Battlefield 4',
        shelfId: 6,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'The Witness',
        shelfId: 7,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'The Witness',
        shelfId: 8,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'The Witness',
        shelfId: 9,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'The Witness',
        shelfId: 10,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Valorant',
        shelfId: 11,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Valorant',
        shelfId: 12,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Valorant',
        shelfId: 13,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Valorant',
        shelfId: 14,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'League of Legends',
        shelfId: 15,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'League of Legends',
        shelfId: 16,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'League of Legends',
        shelfId: 17,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'World of Warcraft',
        shelfId: 5,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'World of Warcraft',
        shelfId: 6,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'World of Warcraft',
        shelfId: 7,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Half-life',
        shelfId: 8,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Half-life',
        shelfId: 9,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Half-life',
        shelfId: 10,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Half-life 2',
        shelfId: 11,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Half-life 2',
        shelfId: 12,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Half-life 2',
        shelfId: 13,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Portal',
        shelfId: 14,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Portal',
        shelfId: 15,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Portal',
        shelfId: 16,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Bloons TD6',
        shelfId: 17,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Bloons TD6',
        shelfId: 5,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Bloons TD6',
        shelfId: 6,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls V: Skyrim',
        shelfId: 7,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls V: Skyrim',
        shelfId: 8,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls V: Skyrim',
        shelfId: 9,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls V: Skyrim',
        shelfId: 10,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls V: Skyrim',
        shelfId: 11,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls V: Skyrim',
        shelfId: 12,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls IV: Oblivion',
        shelfId: 13,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls IV: Oblivion',
        shelfId: 14,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls IV: Oblivion',
        shelfId: 15,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Elder Scrolls IV: Oblivion',
        shelfId: 16,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Age of Empires 4',
        shelfId: 17,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Age of Empires 4',
        shelfId: 5,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Age of Empires 4',
        shelfId: 6,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Starcraft',
        shelfId: 7,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Starcraft',
        shelfId: 8,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Starcraft',
        shelfId: 9,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Grand Theft Auto V',
        shelfId: 10,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Grand Theft Auto V',
        shelfId: 11,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Grand Theft Auto V',
        shelfId: 12,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Grand Theft Auto V',
        shelfId: 13,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Minecraft',
        shelfId: 14,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Minecraft',
        shelfId: 15,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Minecraft',
        shelfId: 16,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Minecraft',
        shelfId: 17,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Minecraft',
        shelfId: 5,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Call of Duty 4',
        shelfId: 6,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Call of Duty 4',
        shelfId: 7,
        status: 'Playing',
        hoursProgressed: 2
      },
      {
        name: 'Call of Duty 4',
        shelfId: 8,
        status: 'Playing',
        hoursProgressed: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Games', {
    }, {});
  }
};