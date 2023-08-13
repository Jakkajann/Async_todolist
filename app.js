
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require(__dirname + "/routes/todos.js");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todos", todoRoutes);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
})

app.listen(port, () => {
    console.log("Server started on port: " + port);
});