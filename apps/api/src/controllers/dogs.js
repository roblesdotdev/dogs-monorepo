async function getAllDogs(req, res) {
  return res.jsonSuccess({ msg: "dogs" });
}

async function createDog(req, res) {
  const body = req.body;
  return res.jsonSuccess({
    msg: `Create dog with body ${JSON.stringify(body, null, 2)}`,
  });
}

async function getDogById(req, res) {
  const { id } = req.params;
  return res.jsonSuccess({ msg: `Dog by id: ${id}` });
}

module.exports = {
  getAllDogs,
  createDog,
  getDogById,
};
