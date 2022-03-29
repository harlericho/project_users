const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//require("../config/db");
const router = require("./api");
const app = express();
const port = process.env.PORT || 9000;
app.set("port", port);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);
app.use("/", (req, res) => {
  res.send("Welcome to the backend");
});

module.exports = app;
