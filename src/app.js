require("dotenv").config();

const path = require("path");
const express = require("express");
const exphbs  = require('express-handlebars');

const app = express();
var PORT = process.env.PORT || 8080;

//  paths
const publicDirectory = path.join(__dirname, "../public");



// templating
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/bulma', express.static(__dirname + '/node_modules/bulma/css/'));



app.use(express.static(publicDirectory));

// Routes

app.get("", (req, res)=> {
    res.render("index")
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });