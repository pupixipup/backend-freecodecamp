let express = require('express');
require('dotenv').config();
let app = express();

app.use((req, res, next) => {
 console.log(req.method, req.path, "-", req.ip);
 next();
})

app.use("/public", express.static(__dirname + "/public"))

app.get("/now", (req, res, next) => {
 res.json({time: req.time});
}, (req, res) => {
 req.time = new Date().toString()
})


app.get("/", (req, res) => {
 res.sendFile(__dirname + "/views/index.html")
})



app.get('/json', (req, res) => {
 let response = {"message": "Hello json"};
 if (process.env.MESSAGE_STYLE === "uppercase") {
  response.message = response.message.toUpperCase();
 }
 res.json(response);
});
















module.exports = app;
