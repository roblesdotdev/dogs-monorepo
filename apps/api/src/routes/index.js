const express = require("express");
const getDogsRoutes = require("./dogs");
const getTemperamentsRoutes = require("./temperaments");

function getApiRoutes() {
  const router = express.Router();

  router.use("/healthcheck", (req, res) => res.send({ status: "Alive" }));

  router.use("/dogs", getDogsRoutes());
  router.use("/temperaments", getTemperamentsRoutes());

  router.use("/throw", (req, res) => {
    throw new Error("Test throw response");
  });

  router.use(function (_req, res) {
    res.jsonError("Sorry! Could not found page.", 404);
  });

  return router;
}

module.exports = getApiRoutes;
