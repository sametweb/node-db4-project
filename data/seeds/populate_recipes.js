exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { quantity: "200 gr", ingredient_id: 1, dish_id: 1 },
        { quantity: "1 can", ingredient_id: 2, dish_id: 1 },
        { quantity: "5 pieces", ingredient_id: 3, dish_id: 1 },
        { quantity: "about 15 slices", ingredient_id: 7, dish_id: 1 },
        { quantity: "50 gr", ingredient_id: 8, dish_id: 1 },
        { quantity: "2 cup", ingredient_id: 2, dish_id: 2 },
        { quantity: "1 teaspoon", ingredient_id: 6, dish_id: 2 },
        { quantity: "2 middle size", ingredient_id: 8, dish_id: 2 },
        { quantity: "1 middle size", ingredient_id: 9, dish_id: 2 },
        { quantity: "3", ingredient_id: 10, dish_id: 2 },
      ]);
    });
};
