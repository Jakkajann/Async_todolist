
const express = require("express");
const helper = require("../helpers/todos");
const router = express.Router();


router.route("/")
    .get(helper.getTodos)
    .post(helper.postTodos)
;


router.route("/:todoId") 
    .get(helper.getTodoId)
    .put(helper.putTodoId)
    .delete(helper.deleteTodoId);

module.exports =  router;