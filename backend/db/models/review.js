'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.Game, { foreignKey: 'gameId', onDelete: 'cascade' });
  };
  return Review;
};