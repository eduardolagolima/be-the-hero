const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ongName = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ongName) {
      return res.status(400).json({ error: "No ONG find with this id." });
    }

    return res.json(ongName);
  }
};
