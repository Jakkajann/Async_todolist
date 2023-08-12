require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require(__dirname + "/routes/todos");
const db = require(__dirname + "/models/index");

const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("Home root route");
})

app.listen(port, () => {
    console.log("Server started on port: " + port);
});