const Animal = require("../models/animal-model");

createAnimal = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "No se encontraron datos del animal",
    });
  }

  const animal = new Animal(body);

  if (!animal) {
    return res.status(400).json({ success: false, error: err });
  }

  animal
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: animal._id,
        message: "El Animal fue creado correctamente!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "El Animal no pudo ser creado!",
      });
    });
};

updateAnimal = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "No se encontraron datos para actualizar el animal",
    });
  }

  Animal.findOne({ id: req.params.id }, (err, animal) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Ocurrió un error al actualizar el animal!",
      });
    }
    animal.animalType = body.animalType;
    animal.weight = body.weight;
    animal.deviceNumber = body.deviceNumber;
    animal.deviceType = body.deviceType;
    animal.farmName = body.farmName;
    animal
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: animal.id,
          message: "El animal fue actualizado correctamente!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Ocurrió un error al actualizar el animal!",
        });
      });
  });
};

deleteAnimal = async (req, res) => {
  await Animal.findOneAndDelete({ id: req.params.id }, (err, animal) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!animal) {
      return res.status(404).json({
        success: false,
        error: `Ocurrió un error al eliminar el animal`,
      });
    }

    return res.status(200).json({ success: true, data: animal });
  }).catch((err) => console.log(err));
};

getAnimals = async (req, res) => {
  await Animal.find({}, (err, animals) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: animals });
  }).catch((err) => console.log(err));
};

module.exports = {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals
};
