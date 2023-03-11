const express = require("express");
const { getAllTemperaments } = require("../controllers/temperaments");

function getTemperamentsRoutes() {
  const router = express();

  router.route("/").get(getAllTemperaments);

  return router;
}

module.exports = getTemperamentsRoutes;
