const express = require("express");
const router = express.Router();

const knex = require("../db/knex.js");

// get all swords
router.get("/", (req, res) => {
  knex("swords")
        .select("*")
        .then((swords) => {
          res.status(200).json(swords);
        });
});

// create sword
router.post("/", (req, res) => {
  knex("swords")
        .insert(req.body)
        .returning("*")
        .then((sword) => {
          res.status(201).json(sword);
        });
});

// get a single sword using it's ID.
router.get("/:id", (req, res) => {
  knex("swords")
        .select("*")
        .where({
          id: req.params.id
        })
        .then((sword) => {
          res.status(200).json(sword);
        });
});


// update a particular sword using it's ID.
router.put("/:id", (req, res) => {
  knex("swords")
        .update(req.body)
        .where({
          id: req.params.id
        })
        .returning("*")
        .then((sword) => {
          res.status(200).json(sword);
        });
});

// delete a sword using it's ID.
router.delete("/:id", (req, res) => {
  knex("swords")
        .where({
          id: req.params.id
        })
        .del()
        .then(() => {
          res.sendStatus(201);
        });
});
module.exports = router;
