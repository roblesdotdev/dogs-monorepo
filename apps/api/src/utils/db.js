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

async function findOrCreateDbDog(name, ...formData) {
  return Dog.findOrCreate({
    where: {
      name,
    },
    defaults: {
      ...formData,
    },
  });
}

async function getDbDogById(id) {
  return Dog.findByPk(id, {
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
