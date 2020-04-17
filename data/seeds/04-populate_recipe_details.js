exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_detail")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_detail").insert([
        { quantity: "200 gr", ingredient_id: 1, recipe_id: 1 },
        { quantity: "1 can", ingredient_id: 2, recipe_id: 1 },
        { quantity: "5 pieces", ingredient_id: 3, recipe_id: 1 },
        { quantity: "about 15 slices", ingredient_id: 7, recipe_id: 1 },
        { quantity: "50 gr", ingredient_id: 8, recipe_id: 1 },
        { quantity: "2 cup", ingredient_id: 2, recipe_id: 2 },
        { quantity: "1 teaspoon", ingredient_id: 6, recipe_id: 2 },
        { quantity: "2 middle size", ingredient_id: 8, recipe_id: 2 },
        { quantity: "1 middle size", ingredient_id: 9, recipe_id: 2 },
        { quantity: "3", ingredient_id: 10, recipe_id: 2 },
      ]);
    });
};
