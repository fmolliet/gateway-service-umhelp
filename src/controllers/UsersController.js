const { indexUsers, createUser, userLogin } = require("../services/UserServices");
const auth = require("../middleware/auth");

class UsersController {
    async index(req, res){
        try {
          const users = await indexUsers();
          return res.status(200).json(users);
        } catch (err) {
          return res.status(400).json(err);
        }
      }

    async register(req, res){
        try {
            const user = await createUser(req.body);
            return res.status(200).json(user);
          } catch (err) {
            return res.status(400).json(err);
          }
    }

    async login(req, res){
        try {
            const user = await userLogin(req, res);
            return res.status(200).json(user);
          } catch (err) {
            return res.status(400).json(err);
          }
    }

    async admin(req, res){ 
        
        const { email } = req.body;
            
        if (email === "fmolliet@hotmail.com") {
            const id = 1;
            const token = auth.createToken(id);
    
            return res
                .status(200)
                .header("auth-token", token)
                .json({ auth: true, token: token });
        }
    }
}

module.exports = new UsersController();
