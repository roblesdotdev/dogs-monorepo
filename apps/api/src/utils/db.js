const { Dogs, Temperaments } = require("../db");
const { Op } = require("sequelize");

async function getDbDogs() {
  return Dogs.findAll({
    include: {
      model: Temperaments,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
}

async function countDbTemperaments(temperaments) {
  return Temperaments.count({
    where: { id: { [Op.in]: temperaments } },
  });
}

async function getDbTemperaments() {
  return Temperaments.findAll();
}

async function findOrCreateDbDog(name, formData) {
  const { lifeSpan, heightMin, heightMax, weightMin, weightMax, ...other } =
    formData;
  return Dogs.findOrCreate({
    where: {
      name,
    },
    defaults: {
      life_span: lifeSpan,
      height: `${heightMin} - ${heightMax}`,
      weight: `${weightMin} - ${weightMax}`,
      ...other,
    },
  });
}

async function getDbDogById(id) {
  return Dogs.findByPk(id, {
    include: {
      model: Temperaments,
      through: { attributes: [] },
    },
  });
}

module.exports = {
  getDbDogs,
  countDbTemperaments,
  findOrCreateDbDog,
  getDbDogById,
  getDbTemperaments,
};
