let express = require('express');
let bodyParser = require("body-parser");
require('dotenv').config();
let app = express();

app.use((req, res, next) => {
 console.log(req.method, req.path, "-", req.ip);
 next();
})

app.use(bodyParser.urlencoded({extended: false}))

app.use("/public", express.static(__dirname + "/public"))

app.get("/:word/echo", (req, res, next) => {
res.json({echo: req.params.word})
});

app.route("/name")
    .get( (req, res) => {
 const {firstname, lastname, first, last} = req.query;
 res.json({name: `${firstname || first} ${lastname || last}`})
})
    .post((req, res) => {
     console.log(req.body)
     const {firstname, lastname, first, last} = req.body;
     res.json({name: `${firstname || first} ${lastname || last}`})
    })


app.get("/", (req, res) => {
 res.sendFile(__dirname + "/views/index.html")
})














module.exports = app;
