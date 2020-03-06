const express = require("express");
const routes = express.Router();

const TeamController = require("./controllers/TeamController");
const PointsController = require("./controllers/PointsController");
const ScoresController = require("./controllers/ScoresController");

routes.post("/teams", TeamController.store);
routes.get("/teams", TeamController.index);

routes.post("/scoreboard/:team_id/points", PointsController.store);
routes.get("/scoreboard/points", PointsController.index);

routes.post(
  "/scoreboard/:team_id/:adversary_id/scores",
  ScoresController.store
);
routes.get("/scoreboard/scores", ScoresController.index);

module.exports = routes;
