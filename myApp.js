let express = require('express');
require('dotenv').config();
let app = express();

app.use((req, res, next) => {
 console.log(req.method, req.path, "-", req.ip);
 next();
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/now", (req, res, next) => {
 next()
 res.json({time: req.time});
}, (req, res) => {
 req.time = new Date().toString()
})

app.get("/json", (req, res) => {
 const message = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json"
 res.json({ message })
})


app.get("/", (req, res) => {
 res.sendFile(__dirname + "/views/index.html")
})


















 module.exports = app;
