const BASE_URL = "https://api.thedogapi.com/v1";

function fetchApiData(endpoint, parser) {
  const url = `${BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
  return fetch(url).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      if (!Array.isArray(data)) return Promise.reject("Invalid response");
      return Promise.resolve(data.map(parser));
    }
    return Promise.reject(new Error("Something went wrong with the api call"));
  });
}

module.exports = {
  fetchApiData,
};
