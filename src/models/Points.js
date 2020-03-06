const { Model, DataTypes } = require("sequelize");

class Points extends Model {
  static init(sequelize) {
    super.init(
      {
        points: DataTypes.INTEGER,
        games: DataTypes.INTEGER,
        victories: DataTypes.INTEGER,
        draws: DataTypes.INTEGER,
        loses: DataTypes.INTEGER,
        goals_for: DataTypes.INTEGER,
        goals_against: DataTypes.INTEGER,
        goals_balance: DataTypes.INTEGER,
        utilization: DataTypes.INTEGER,
        team_name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Team, { foreignKey: "team_id", as: "team" });
  }
}

module.exports = Points;
