const Team = require("../models/Team");

module.exports = {
  async index(req, res) {
    const teams = await Team.findAll();

    return res.json(teams);
  },
  async store(req, res) {
    const { name, serie, group, alias } = req.body;

    let team = await Team.findOne({
      where: { name }
    });

    if (!team) {
      team = await Team.create({
        name,
        serie,
        group,
        alias
      });
    }

    return res.json(team);
  }
};
