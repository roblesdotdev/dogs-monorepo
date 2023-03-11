const express = require("express");
const { getAllDogs, getDogById, createDog } = require("../controllers/dogs");

function getDogsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllDogs).post(createDog);

  router.route("/:id").get(getDogById);

  return router;
}

module.exports = getDogsRoutes;
