const express = require("express");
const { getAllDogs, getDogById, createDog } = require("../controllers/dogs");
const { validateForm } = require("../middlewares/validation");

function getDogsRoutes() {
  const router = express.Router();

  router.route("/").get(getAllDogs).post(validateForm, createDog);

  router.route("/:id").get(getDogById);

  return router;
}

module.exports = getDogsRoutes;
