const {requestSvc} = require("../services/api")

class RequestController {
    async price (req, res){
        const response = requestSvc.post("/price", req);
        return res.status(200).jsonn(response);
    }
}

module.exports = RequestController;