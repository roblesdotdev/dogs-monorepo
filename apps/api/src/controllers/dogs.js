async function getAllDogs(req, res) {
  return res.json({ msg: "dogs" });
}

async function createDog(req, res) {
  const body = req.body;
  return res.json({
    msg: `Create dog with body ${JSON.stringify(body, null, 2)}`,
  });
}

async function getDogById(req, res) {
  const { id } = req.params;
  return res.json({ msg: `Dog by id: ${id}` });
}

module.exports = {
  getAllDogs,
  createDog,
  getDogById,
};
