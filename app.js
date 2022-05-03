// Initialise the express
const express = require("express");
// Initialise the app
const app = express();
// add port-> this is the number where app will run

const port = 3003;
const server = app.listen(port, () => console.log("Server linstening on port: " + port));

app.set("view engine", "pug");
app.set("views", "views");

// To send get request
app.get("/", (req, res, next) => { 
    res.status(200).render("home");
})
