const express = require("express");

const server = express();

const db = require("./data/helpers/data-model");

server.get("/", (req, res) => res.json({ api: "up " }));

server.get("/recipes", (req, res) => {
  db.getRecipes().then((recipes) => res.json(recipes));
});

server.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  db.getShoppingList(id).then((list) => res.json(list));
});

module.exports = server;
