exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instruction")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instruction").insert([
        { text: "Spread the sauce on the dough", step_number: 1, recipe_id: 1 },
        { text: "Spread the shredded cheese", step_number: 2, recipe_id: 1 },
        {
          text: "Place mushrooms evenly distanced",
          step_number: 3,
          recipe_id: 1,
        },
        {
          text: "Place all other ingredients as you wish",
          step_number: 4,
          recipe_id: 1,
        },
        {
          text: "Cook it in 375 degrees for 20 minutes",
          step_number: 5,
          recipe_id: 1,
        },
        {
          text: "Slice up the onion and green pepper",
          step_number: 1,
          recipe_id: 2,
        },
        {
          text: "Put some oil in the pan and cook onion and green pepper",
          step_number: 2,
          recipe_id: 2,
        },
        {
          text: "Add tomatoes after the onions look pink",
          step_number: 3,
          recipe_id: 2,
        },
        {
          text: "Cook it until tomatoes release its water",
          step_number: 4,
          recipe_id: 2,
        },
        {
          text: "Add eggs and cook for 2 minutes",
          step_number: 5,
          recipe_id: 2,
        },
      ]);
    });
};
