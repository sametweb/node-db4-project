exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
    })
    .createTable("instruction", (table) => {
      table.increments();
      table.text("text").notNullable();
      table.integer("step_number").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); //the app doesn't need instructions if the recipe is deleted.
      table.unique(["step_number", "recipe_id"]); //one recipe can have only one first, one second step etc.
    })
    .createTable("ingredient", (table) => {
      table.increments();
      table.string("name").notNullable().unique().index();
    })
    .createTable("recipe_detail", (table) => {
      table.increments();
      table.string("quantity", 255).notNullable();
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredient")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT"); //if the ingredient is used in a recipe, it shouldn't be deleted
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); //recipe is not needed anymore if the recipe is deleted
      table.unique(["ingredient_id", "recipe_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_detail")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("instruction")
    .dropTableIfExists("recipe");
};
