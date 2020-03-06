const { Model, DataTypes } = require("sequelize");

class Scores extends Model {
  static init(sequelize) {
    super.init(
      {
        goals_home: DataTypes.INTEGER,
        goals_away: DataTypes.INTEGER,
        team_alias: DataTypes.STRING,
        adversary_alias: DataTypes.STRING,
        stadium_name: DataTypes.STRING,
        game_date: DataTypes.STRING,
        round: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Team, { foreignKey: "team_id", as: "team" });
    this.belongsTo(models.Team, {
      foreignKey: "adversary_id",
      as: "adversary"
    });
  }
}

module.exports = Scores;
