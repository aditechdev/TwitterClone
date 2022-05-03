// Initialise the express
const express = require("express");
// Initialise the app
const app = express();

const router = express.Router();
const bodyParser = require("body-parser");

// Useing Template Engine "pug"
app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
 
// To send get request
router.get("/", (req, res, next) => { 
    // added payLoad
    // var payload = {
    //     pageTitle: "Home"
    // }
    res.status(200).render("register");
})
// To move forward from register
router.post("/", (req, res, next) => { 
    console.log(req.body);
    res.status(200).render("register");
})

module.exports = router;
