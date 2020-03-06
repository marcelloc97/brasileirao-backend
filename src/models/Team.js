const { Model, DataTypes } = require("sequelize");

class Team extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        serie: DataTypes.STRING,
        group: DataTypes.STRING,
        alias: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Team;
