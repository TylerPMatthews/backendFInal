const express = require("express");
const Recipe = require("./recipe-model");
const router = express.Router();
const restricted = require("../middleware/restricted");
const checkRecipeID = require("../middleware/checkRecipeID");

//get all recipes
router.get("/", restricted, async (req, res, next) => {
  try {
    const rows = await Recipe.getAll();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//get recipe by id
router.get("/:id", restricted, checkRecipeID, async (req, res, next) => {
  try {
    const rows = await Recipe.getByID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

// post a new recipe
router.post("/", restricted, async (req, res, next) => {
  try {
    const rows = await Recipe.post(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//remove recipe
router.delete("/:id", restricted, checkRecipeID, async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await Recipe.deleteRecipe(id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//edit a recipe
router.put("/:id", restricted, checkRecipeID, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const rows = await Recipe.editRecipe(id, data);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.use((err, req, res) => {
  res.status(500).json({
    message: " Recipe server error",
    error: err.message,
  });
});

module.exports = router;
