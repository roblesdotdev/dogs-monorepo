function requireFromEnv(envName, envObj = process.env) {
  if (envObj[envName]) return envObj[envName];
  throw new Error(`Environment var ${envName} must be set`);
}

function optionalFromEnv(envName, defaultValue = "", envObj = process.env) {
  return envObj[envName] || defaultValue;
}

function getDBURL(envObj = process.env) {
  // for testing use SQLITE
  if (envObj.NODE_ENV === "test")
    return envObj.DB_TEST_URL || "sqlite::memory:";
  const db_url = requireFromEnv("DB_URL", envObj);
  return db_url;
}

module.exports = {
  requireFromEnv,
  optionalFromEnv,
  getDBURL,
};
