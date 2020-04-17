const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getAllRecipesByIngredient,
};

function getRecipes() {
  return db("recipe");
}

function getShoppingList(recipe_id) {
  return db("recipe_detail")
    .where({ recipe_id })
    .join("ingredient", "ingredient.id", "=", "ingredient_id")
    .select("ingredient_id", "quantity", "name as ingredient_name");
}

function getInstructions(recipe_id) {
  return db("instruction")
    .where({ recipe_id })
    .select("step_number", "text")
    .orderBy("step_number", "asc");
}

function getAllRecipesByIngredient(ingredient_id) {
  return db("recipe_detail")
    .where({ ingredient_id })
    .join("recipe", "recipe_id", "recipe.id")
    .select("recipe_id", "recipe.name");
}
