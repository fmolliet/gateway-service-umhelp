const { Router } = require('express');

const router = require("./router");

const routes = Router();

routes.use("/", router );

module.exports = routes;