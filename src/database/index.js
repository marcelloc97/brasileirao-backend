const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Team = require("../models/Team");
const Points = require("../models/Points");
const Scores = require("../models/Scores");

const connection = new Sequelize(dbConfig);

Team.init(connection);
Points.init(connection);
Scores.init(connection);

Points.associate(connection.models);
Scores.associate(connection.models);

module.exports = connection;
