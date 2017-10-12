const express = require('express');
const router = express.Router();
const helper = require("../helper/todo");

router.route("/")
    .get(helper.getTodos)
    .post(helper.createTodos);


router.route("/:id")
    .get(helper.getTodo)
    .put(helper.updateTodo)
    .delete(helper.deleteTodo);

module.exports = router;
