const logger = require("loglevel");
const server = require("./server");
const { APP_PORT, DB_FORCE } = require("./config");
const { conn } = require("./db");

logger.setLevel(process.env.NODE_ENV !== "production" ? "TRACE" : "SILENT");

server.listen(APP_PORT, async () => {
  logger.info(`Server listening at ${server.address().port}`);
  try {
    await conn.sync({ force: DB_FORCE });
    logger.info("Database is up");
  } catch (err) {
    logger.error(err.message);
  }
});
