'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(256)
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      developer: {
        type: Sequelize.STRING(256)
      },
      imageURL: {
        type: Sequelize.STRING(256)
      },
      shelfId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Shelves' }
      },
      status: {
        type: Sequelize.STRING(256)
      },
      hoursProgressed: {
        type: Sequelize.DECIMAL(10, 1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};