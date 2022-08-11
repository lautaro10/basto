const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const ANIMAL_TYPES = ["Novillo", "Toro", "Vaquillona"];

const DEVICE_TYPES = ["Collar", "Caravana"];

const Animal = new Schema(
  {
    id: { type: String, required: true, maxlength: 16, unique: true },
    animalType: { type: String, required: true, enum: ANIMAL_TYPES },
    weight: { type: Number, required: true },
    deviceType: { type: String, required: true, enum: DEVICE_TYPES },
    deviceNumber: { type: String, required: true, maxlength: 8 },
    farmName: { type: String, required: true, maxlength: 200 },
  },
  { timestamps: true }
);

Animal.plugin(uniqueValidator);
module.exports = mongoose.model("animals", Animal);
