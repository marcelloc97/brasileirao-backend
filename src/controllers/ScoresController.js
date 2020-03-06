const Scores = require("../models/Scores");
const Team = require("../models/Team");

module.exports = {
  async index(req, res) {
    const scores = await Scores.findAll();

    return res.json(scores);
  },
  async store(req, res) {
    const { team_id, adversary_id } = req.params;
    const { stadium_name, game_date, goals_home, goals_away, round } = req.body;

    const team = await Team.findByPk(team_id);
    const adversary = await Team.findByPk(adversary_id);

    let score = await Scores.findOne({
      where: { team_id }
    });

    if (!score) {
      score = await Scores.create({
        team_id,
        adversary_id,
        team_alias: team.getDataValue("alias"),
        adversary_alias: adversary.getDataValue("alias"),
        goals_home,
        goals_away,
        stadium_name,
        game_date,
        round
      });
    }

    return res.json(score);
  }
};
