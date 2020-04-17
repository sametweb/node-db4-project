exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredient")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredient").insert([
        { name: "cheese" },
        { name: "tomato sauce" },
        { name: "mushroom" },
        { name: "flour" },
        { name: "water" },
        { name: "salt" },
        { name: "pepperoni" },
        { name: "green pepper" },
        { name: "onion" },
        { name: "egg" },
      ]);
    });
};
