const Recipe = require("../recipes/recipe-model");

const checkRecipeID = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Recipe.getByID(id);
    if (!user.id) {
      res.status(404).json({ message: `ID ${id} found.` });
    } else {
      next();
    }
  } catch (e) {
    res.status(500).json({ message: `${e}` });
  }
};

module.exports = checkRecipeID;
