function hasRequiredFields(fields, obj) {
  for (const f of fields) {
    if (!obj[f]) {
      return false;
    }
  }
  return true;
}

function validateForm(req, res, next) {
  const required = [
    "name",
    "image",
    "heightMin",
    "heightMax",
    "weightMin",
    "weightMax",
    "lifeSpan",
    "temperaments",
  ];
  if (!hasRequiredFields(required, req.body)) {
    return res.jsonError(400, `${required.join(", ")} are required`);
  }
  const {
    name,
    image,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpan,
    temperaments,
  } = req.body;

  if (!Array.isArray(temperaments) || !temperaments.length) {
    return res.jsonError(400, "temperaments is required and must be an array");
  }

  res.form = {
    name: name.trim(),
    image: image.trim(),
    heightMin: +heightMin,
    heightMax: +heightMax,
    weightMin: +weightMin,
    weightMax: +weightMax,
    lifeSpan,
    temperaments,
  };
  next();
}

module.exports = { validateForm };
