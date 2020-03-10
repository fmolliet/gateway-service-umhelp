const { Router } = require("express");
const auth = require("../middleware/auth");
const  usersController = require("../controllers/UsersController");
const reqController = require("../controllers/requestController");

const router = Router();

router.get("/users", auth.verify, usersController.index )
        .post("/prices", auth.verify, reqController.price)
        .post("/users/register", auth.verify, usersController.register)
        .post("/users/login", usersController.login)
        .post("/users/admin", usersController.admin)
        .post("/requests", auth.verify, reqController.createRequest);
        
//router.post("/discounts", );

module.exports = router;