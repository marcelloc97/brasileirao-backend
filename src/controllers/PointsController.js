const Points = require("../models/Points");
const Team = require("../models/Team");

module.exports = {
  async index(req, res) {
    const points = await Points.findAll();

    return res.json(points);
  },
  async store(req, res) {
    const { team_id } = req.params;
    const {
      points,
      games,
      victories,
      draws,
      loses,
      goals_for,
      goals_against,
      goals_balance,
      utilization
    } = req.body;

    const team = await Team.findByPk(team_id);

    let point = await Points.findOne({
      where: { team_id }
    });

    if (!point) {
      point = await Points.create({
        team_id,
        points,
        games,
        victories,
        draws,
        loses,
        goals_for,
        goals_against,
        goals_balance,
        utilization,
        team_name: team.getDataValue("name")
      });
    }

    return res.json(point);
  }
};
