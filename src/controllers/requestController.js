const {requestSvc} = require("../services/api")

class RequestController {
    async price(req, res){
        let response= [];
        try{
            const response = await requestSvc.post("/prices", req.body);
          } catch (err) {
            return res.status(400).send({ error:  `${err}` })
        }       
            
        return res.status(200).json(response);
    }

    async createRequest(req, res){
        try{
            const response = await requestSvc.post("/", req.body);
            return res.status(200).json(response);
        } catch (err) {
            return res.status(400).send({ error:  `${err}` })
        }  
    }
}

module.exports = new RequestController();
