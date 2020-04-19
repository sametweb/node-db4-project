const express = require("express");

const server = express();

const db = require("./data/helpers/data-model");

server.get("/", (req, res) => res.send("<h1>Welcome to my API</h1>"));

server.get("/recipes", (req, res) => {
  db.getRecipes().then((recipes) => res.status(200).json(recipes));
});

server.get("/recipes/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  db.getShoppingList(id).then((list) => res.status(200).json(list));
});

server.get("/recipes/:id/instructions", (req, res) => {
  const { id } = req.params;
  db.getInstructions(id).then((list) => res.status(200).json(list));
});

server.get("/ingredients/:id/recipes", (req, res) => {
  const { id } = req.params;
  db.getAllRecipesByIngredient(id).then((list) => res.status(200).json(list));
});

module.exports = server;
