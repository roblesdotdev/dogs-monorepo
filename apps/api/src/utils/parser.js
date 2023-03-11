function parseBreed(item) {
  return {
    id: item.id,
    name: item.name,
    image: item.image.url,
    life_span: item.life_span,
    weight: item.weight.metric?.split(" - "),
    height: item.height.metric?.split(" - "),
    temperaments: item.temperament?.split(", "),
  };
}

module.exports = {
  parseBreed,
};
