const mongoose = require("mongoose");
const { Schema } = mongoose;

var todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed: { type: Boolean, default: false },
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Todo", todoSchema);
