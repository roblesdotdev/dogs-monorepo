const logger = require("loglevel");
const { fetchApiData } = require("../utils");
const { Temperaments } = require("./");

async function seed() {
  const count = await Temperaments.count();
  if (count === 0) {
    logger.info("⏳ Populating database...");
    try {
      let temperaments = await fetchApiData(
        "/breeds",
        (item) => item.temperament
      );
      temperaments = temperaments
        .join()
        .split(",")
        .map((t) => ({ name: t.trim() }));
      await Temperaments.bulkCreate(temperaments);
      logger.info("✅ Database is populated!");
    } catch (e) {
      logger.info(`❌ ${e.message}`);
    }
  }
}

module.exports = seed;
