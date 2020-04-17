const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
};

function getRecipes() {
  return db("dishes");
}

function getShoppingList(dish_id) {
  return db("recipes")
    .where({ dish_id })
    .join("ingredients", "ingredients.id", "recipes.ingredient_id")
    .select("ingredients.id", "quantity", "ingredients.name");
}
