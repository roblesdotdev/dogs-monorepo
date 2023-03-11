const { fetchApiData } = require("../utils");
const { parseBreed } = require("../utils/parser");
const {
  getDbDogs,
  countDbTemperaments,
  findOrCreateDbDog,
  getDbDogById,
} = require("../utils/db");

async function getMergedDogs() {
  const apiData = await fetchApiData("/breeds", parseBreed);
  const dbData = await getDbDogs();
  return [...apiData, ...dbData];
}

async function getAllDogs(req, res) {
  const { name } = req.query;
  let data = await getMergedDogs();

  if (name) {
    const query = decodeURI(name).toLowerCase();
    data = await data.filter((b) => b.name.toLowerCase().includes(query));
  }
  if (!Boolean(data.length))
    return res.jsonError("Ups! Could't found dogs!", 404);
  return res.jsonSuccess(data);
}

async function createDog(req, res) {
  const { temperaments } = req.body;
  const count = await countDbTemperaments(temperaments);
  if (count !== temperaments.length) {
    return res.jsonError("Invalid temperaments provided.", 400);
  }
  const { name, ...formData } = res.form;
  const [dog, created] = await findOrCreateDbDog(name, formData);
  if (!created)
    return res.jsonError(`The dog ${res.form.name} already exists`, 400);
  await dog.setTemperaments(temperaments);

  const newDog = await getDbDogById(dog.id);
  res.jsonSuccess({ dog: newDog });
}

async function getDogById(req, res) {
  const { id } = req.params;
  const dogs = await getMergedDogs();
  let dog = await dogs.find((el) => el.id === parseInt(id));

  if (!dog) return res.jsonError(`Could not found dog with id ${id}`, 404);
  return res.jsonSuccess(dog);
}

module.exports = {
  getAllDogs,
  createDog,
  getDogById,
};
