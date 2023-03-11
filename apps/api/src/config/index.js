const { getDBURL, optionalFromEnv } = require("./utils");

const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") {
  require("dotenv").config();
}

// APP_PORT: port number where server runs
// DB_FORCE: 0 === "off" | 1 === "on"
// DATABASE_URL: path where lives the db
module.exports = {
  APP_PORT: Number(optionalFromEnv("APP_PORT", 3001)),
  DB_FORCE: Boolean(Number(optionalFromEnv("DB_FORCE", 1))),
  DATABASE_URL: getDBURL(),
};
