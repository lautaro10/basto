const express = require("express");

const AnimalCtrl = require("../controllers/animal-ctrl");

const router = express.Router();

router.post("/animal", AnimalCtrl.createAnimal);
router.put("/animal/:id", AnimalCtrl.updateAnimal);
router.delete("/animal/:id", AnimalCtrl.deleteAnimal);
router.get("/animals", AnimalCtrl.getAnimals);

module.exports = router;
