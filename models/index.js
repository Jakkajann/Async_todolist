
require("dotenv").config();
const mongoose = require("mongoose");

console.log(process.env.DB_LINK);

mongoose.connect(process.env.DB_LINK)
    .then(() => {
    console.log("Successfully connected to the database");
})
    .catch(()=> {
        console.log("Failed to connect to the database");
    })

;


module.exports.Todo = require("./todo");