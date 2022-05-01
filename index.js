"use strict";
var http = require("http");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var fs = require("fs");
const routes = require("./routes/nlp");
var path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const swaggerConfig = require("./config/swagger");

//Configuring the Express Middleware
var app = express();

// var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'})

//Configure Morgan's Logging Formats
// app.use(morgan('common', {stream: accessLogStream}))    //UNCOMMENT TO ENABLE FILE LOGGING
app.use(morgan("common"));

//Set PORT to Dynamic Environments to run on any Server
var port = process.env.PORT || 3001;
var serverUrl = process.env.BASE_URL;
if(serverUrl == undefined || serverUrl == ""){
    serverUrl = "http://localhost:"+port;
}

}
const expressSwagger = require("express-swagger-generator")(app);
expressSwagger(swaggerConfig(__dirname, serverUrl));

//Configure Express to Recieve JSON and extended URLencoded formats
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(
  cors({
    exposedHeaders: "*",
  })
);

app.use(express.json());       // to support JSON-encoded bodies

//Set RESTful routes

app.get("/", function (req, res) {
  res.redirect("/api-docs");
});
//Route for GET

app.use("/api/v1", routes);
//Route for file uploads

app.listen(port);
console.log("Server started successfully at PORT : " + port);
//module.exports=app;
