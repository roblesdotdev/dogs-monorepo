const { getDbTemperaments } = require("../utils/db");

async function getAllTemperaments(req, res) {
  const temperaments = await getDbTemperaments();
  if (!Boolean(temperaments.length))
    return res.jsonError("Could not found temperaments", 404);
  return res.jsonSuccess(temperaments);
}

module.exports = {
  getAllTemperaments,
};
