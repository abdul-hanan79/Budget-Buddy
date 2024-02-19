const express = require("express");
const routes = express.Router();
const { doStripeCheckout } = require("../controller/stripeController");
routes.post("/checkpoint", doStripeCheckout);

module.exports = routes;
