const express = require("express");
const bodyParser = require("body-parser");

const router = require("./modules/router");
const app = express();
PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => {
  console.log("Server is running on PORT 8080");
});

// "list", { kindOfDay: today }
