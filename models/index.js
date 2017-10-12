const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todoApi")
    .then(() => {
        console.log("connected!!!");
    })
    .catch((error) => {
        console.log("Failed to connect mongodb");
    });
mongoose.Promise = Promise;
module.exports.Todo = require("./todo");