const express = require('express');
require("./models");
const todosRoute = require("./routes/todo");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const PORT = 8081;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/todos", todosRoute);

app.listen(PORT,  () => {
    console.log("Server started.......", PORT, process.env.IP);
});
