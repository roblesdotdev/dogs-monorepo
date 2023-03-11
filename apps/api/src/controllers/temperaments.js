async function getAllTemperaments(req, res) {
  return res.json({ msg: "All temperaments" });
}

module.exports = {
  getAllTemperaments,
};
