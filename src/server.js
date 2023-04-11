import express from "express";
import bodyParser from "body-parser";
import configviewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configviewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;
//port === undefined => port = 8080

app.listen(port, () => {
  //callback
  console.log("Backend NodeJS is running on the port: " + port);
});
