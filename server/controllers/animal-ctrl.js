const Animal = require("../models/animal-model");

createAnimal = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a animal",
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
        message: "Animal created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Animal not created!",
      });
    });
};

updateAnimal = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Animal.findOne({ _id: req.params.id }, (err, animal) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Animal not found!",
      });
    }
    animal.name = body.name;
    animal.time = body.time;
    animal.rating = body.rating;
    animal
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: animal._id,
          message: "Animal updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Animal not updated!",
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
      return res
        .status(404)
        .json({ success: false, error: `Animal not found` });
    }

    return res.status(200).json({ success: true, data: animal });
  }).catch((err) => console.log(err));
};

getAnimalById = async (req, res) => {
  await Animal.findOne({ _id: req.params.id }, (err, animal) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!animal) {
      return res
        .status(404)
        .json({ success: false, error: `Animal not found` });
    }
    return res.status(200).json({ success: true, data: animal });
  }).catch((err) => console.log(err));
};

getAnimals = async (req, res) => {
  await Animal.find({}, (err, animals) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!animals.length) {
      return res
        .status(404)
        .json({ success: false, error: `Animal not found` });
    }
    return res.status(200).json({ success: true, data: animals });
  }).catch((err) => console.log(err));
};

module.exports = {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimalById,
};
