const axios = require("axios");

const requestSvc = axios.create({
    baseURL: `http://${process.env.RQT_HOSTNAME}:${process.env.RQT_PORT}/requests`
});

const discountSvc = axios.create({
    baseURL: `http://${process.env.DSCT_HOSTNAME}:${process.env.DSCT_PORT}/discounts`
});

module.exports = {
    requestSvc,
    discountSvc
}