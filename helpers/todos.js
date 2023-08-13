const db = require("../models/index");

exports.getTodos = (req, res) => {
    db.Todo.find()
        .then((todos) => {
            res.send(todos);
        });
}

exports.postTodos = (req, res) => {
    db.Todo.create(req.body)
    .then((newTodo) => {
        res.status(201).send(newTodo);
    })
    .catch((err)=> {
        res.send(err.message);
    })
}

exports.getTodoId = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then((result) => {
            if(result) {
                res.send(result);
            } else {
                res.send({message: "Nothing found"});
            }
        })
}

exports.putTodoId = (req, res) => {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err.message);
        })
}

exports.deleteTodoId = (req, res) => {
    db.Todo.findOneAndDelete({_id: req.params.todoId})
        .then(() => {
            res.send({message: "Deleted successfully"});
        })
        .catch((err) => {
            res.send(err.message);
        })
}