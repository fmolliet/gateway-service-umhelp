require("dotenv").config();

const cors = require("cors");
const express = require("express");

const { connect } = require("./database/connect");
const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

connect();

module.exports = app;
