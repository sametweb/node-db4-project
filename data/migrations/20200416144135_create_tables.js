exports.up = function (knex) {
  return knex.schema
    .createTable("dishes", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
    })
    .createTable("instructions", (table) => {
      table.increments();
      table.text("text").notNullable();
      table.integer("step_number").notNullable();
      table
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); //the app doesn't need instructions if the dish is deleted.
      table.unique(["step_number", "dish_id"]); //one recipe can have only one first, one second step etc.
    })
    .createTable("ingredients", (table) => {
      table.increments();
      table.string("name").notNullable().unique().index();
    })
    .createTable("recipes", (table) => {
      table.increments();
      table.string("quantity", 255).notNullable();
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT"); //if the ingredient is used in a recipe, it shouldn't be deleted
      table
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); //recipe is not needed anymore if the dish is deleted
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("dishes");
};
