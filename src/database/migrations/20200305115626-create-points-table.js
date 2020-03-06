"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("points", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "teams", key: "id" }
      },
      points: Sequelize.INTEGER,
      games: Sequelize.INTEGER,
      victories: Sequelize.INTEGER,
      draws: Sequelize.INTEGER,
      loses: Sequelize.INTEGER,
      goals_for: Sequelize.INTEGER,
      goals_against: Sequelize.INTEGER,
      goals_balance: Sequelize.INTEGER,
      utilization: Sequelize.INTEGER,
      team_name: Sequelize.STRING,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("points");
  }
};
