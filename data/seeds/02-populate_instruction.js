exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instruction")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instruction").insert([
        { text: "Spread the sauce on the dough", step_number: 1, recipe_id: 1 },
        { text: "Spread the shredded cheese", step_number: 2, recipe_id: 1 },
        { text: "Place mushrooms on the pizza", step_number: 3, recipe_id: 1 },
        { text: "Place all other ingredients", step_number: 4, recipe_id: 1 },
        { text: "Cook it in 375F for 20 min", step_number: 5, recipe_id: 1 },
        { text: "Dice onion and green pepper", step_number: 1, recipe_id: 2 },
        { text: "Cook onion and pepper 8 min", step_number: 2, recipe_id: 2 },
        { text: "Add tomatoes after", step_number: 3, recipe_id: 2 },
        { text: "Cook it until they get watery", step_number: 4, recipe_id: 2 },
        { text: "Add eggs and cook for 1 min", step_number: 5, recipe_id: 2 },
        { text: "Mix flour and dry yeast", step_number: 1, recipe_id: 3 },
        { text: "Add water and knead the dough", step_number: 2, recipe_id: 3 },
        { text: "Wait 45 min for it to rise", step_number: 3, recipe_id: 3 },
        { text: "Cook it in 400F for 30 min", step_number: 4, recipe_id: 3 },
      ]);
    });
};
