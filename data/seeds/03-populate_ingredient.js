exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredient")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredient").insert([
        { name: "Cheese" },
        { name: "Tomato sauce" },
        { name: "Mushroom" },
        { name: "Flour" },
        { name: "Water" },
        { name: "Salt" },
        { name: "Pepperoni" },
        { name: "Green pepper" },
        { name: "Onion" },
        { name: "Egg" },
        { name: "Yeast" },
      ]);
    });
};
