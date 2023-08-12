
const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
    db.Todo.find()
        .then((todos) => {
            res.send(todos);
        });
});

router.post("/", (req, res) => {
    db.Todo.create(req.body)
    .then((newTodo) => {
        res.status(201).send(newTodo);
    })
    .catch((err)=> {
        res.send(err.message);
    })
});

module.exports =  router;