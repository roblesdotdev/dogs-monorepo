const { getDBURL, optionalFromEnv } = require("./utils");

const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") {
  require("dotenv").config();
}

// APP_PORT: port number where server runs
// DB_SYNC: 0 === "off" | 1 === "on"
// DB_DIALECT: "sqlite" | "postgres"
// DB_URL: path where lives the db
module.exports = {
  APP_PORT: Number(optionalFromEnv("APP_PORT", 3001)),
  DB_SYNC: Boolean(Number(optionalFromEnv("DB_SYNC", 1))),
  DB_DIALECT: optionalFromEnv("DB_DIALECT", "sqlite"),
  DB_URL: getDBURL(),
};
