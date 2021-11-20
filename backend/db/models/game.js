'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    developer: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    shelfId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    hoursProgressed: DataTypes.DECIMAL(10, 1)
  }, {});
  Game.associate = function (models) {
    Game.belongsTo(models.Shelf, { foreignKey: 'shelfId' });
    Game.hasOne(models.Review, { onDelete: 'cascade', foreignKey: 'gameId' });
  };
  return Game;
};