const axios = require("axios");

const requestSvc = axios.create({
    baseURL: `http://localhost:3001/requests`
});

const discountSvc = axios.create({
    baseURL: `http://localhost:3002/discounts`
});

module.exports = {
    requestSvc,
    discountSvc
}