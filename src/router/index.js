const { Router } = require("express");
const auth = require("../middleware/auth");
const  usersController = require("../controllers/UsersController");

const router = Router();

router.get("/users", auth.verify, usersController.index )
        .post("/users/register", auth.verify, usersController.register)
        .post("/users/login", usersController.login)
        .post("/users/admin", usersController.admin);
        
//router.post("/discounts", );

module.exports = router;