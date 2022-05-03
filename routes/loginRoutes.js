// Initialise the express
const express = require("express");
// Initialise the app
const app = express();

const router = express.Router();

// Useing Template Engine "pug"
app.set("view engine", "pug");
app.set("views", "views");
 
// To send get request
router.get("/", (req, res, next) => { 
    // added payLoad
    var payload = {
        pageTitle: "Home"
    }
    res.status(200).render("login");
})

module.exports = router;
