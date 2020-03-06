"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("scores", {
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
      adversary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "teams", key: "id" }
      },
      team_alias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adversary_alias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      goals_home: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      goals_away: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stadium_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      game_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      round: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
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
    return queryInterface.dropTable("scores");
  }
};
