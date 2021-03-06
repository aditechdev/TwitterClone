// Initialise the express
const express = require("express");
// Initialise the app
const app = express();
// add port-> this is the number where app will run
const port = 3003;
// add middle ware
const middleware = require("./middleware");
const path = require("path");
const bodyParser = require("body-parser");

// BootStrap 4.4
// https://getbootstrap.com/docs/4.4/getting-started/introduction/


const server = app.listen(port, () => console.log("Server linstening on port: " + port));

// Useing Template Engine "pug"
app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// ROutes
const loginRoute = require("./routes/loginRoutes");
const registerRoute = require("./routes/registerRoutes");
app.use("/login", loginRoute);
app.use("/register", registerRoute);

// To send get request
app.get("/", middleware.requireLogin, (req, res, next) => { 
    // added payLoad
    var payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home", payload);
})
