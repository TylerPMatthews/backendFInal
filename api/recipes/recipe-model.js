const db = require("../../api/data/db-config");

//get all recipes on db
const getAll = () => {
  return db("recipes");
};

//get recipe by ID
const getByID = (id) => {
  return db("recipes").where("recipe_id", id);
};

//post a recipe
const post = (recipe) => {
  return db("recipes").insert(recipe);
};

//delete a recipe

const deleteRecipe = (id) => {
  return db("recipes").where("recipe_id", id).del();
};

//edit a recipe
const editRecipe = (id,changes) => {
  return db("recipes").where("recipe_id", id).update(changes);
};

module.exports = {
  getAll,
  getByID,
  post,
  deleteRecipe,
  editRecipe,
};
