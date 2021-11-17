'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    shelfName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  Shelf.associate = function (models) {
    Shelf.hasMany(models.Game, { onDelete: 'cascade' });
    Shelf.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Shelf;
};