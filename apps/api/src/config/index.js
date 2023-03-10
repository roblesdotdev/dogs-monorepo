const { getDBURL, optionalFromEnv } = require("./utils");

const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  APP_PORT: Number(optionalFromEnv("APP_PORT", 3001)),
  DB_FORCE: Boolean(optionalFromEnv("DB_FORCE", false)),
  DATABASE_URL: getDBURL(),
};
