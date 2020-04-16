const express = require("express");

const server = express();

const db = require("./data/helpers/data-model");

server.get("/", (req, res) => res.json({ api: "up " }));

server.get("/recipes", (req, res) => {
  db.getRecipes().then((recipes) => res.json(recipes));
});

module.exports = server;
