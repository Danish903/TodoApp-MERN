const db = require("../models");
exports.getTodos = (req, res) => {

    db.Todo.find({})
        .then((todos) => {
            res.status(200).json(todos);
        })
        .catch((error) => {
            res.json(error);
        });
};

exports.createTodos = (req, res) => {
    console.log(req.body);

    db.Todo.create(req.body)
        .then((todo) => {
            res.status(201).json(todo);
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.id)
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.updateTodo =  (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch(error => {
            console.log(error);
        });
};

exports.deleteTodo = (req, res) => {
    db.Todo.findByIdAndRemove(req.params.id)
        .then((todo) => {
            res.status(200).json({ message: "Deleted!!!" });
        })
        .catch(error => {
            console.log(error);
        });
};

module.exports = exports;
