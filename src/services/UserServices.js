const User = require("../models/User");
const crypt  = require( "../utils/crypt");
const auth = require("../middleware/auth");

class UserServices {
    async indexUsers(){
        return User.find();
    }

    async createUser(body){
        const { firstname, lastname, email, birthday, password } = body;
    
        let user = await User.findOne({
          email
        });
    
        if (!user) {
          const newPass = await crypt.encrypt(password);
    
          user = await User.create({
            email,
            password: newPass
          });
    
          return user;
        }
    
        return user;
      }

      async userLogin( req, res ){ 
        const { email, password } = req.body
        if (!email || !password) return res.status(400).send({ error: 'Login ou senha inválidos' })
        try {
            const user =  await User.find({ email }).select('+password')
            if (!user) return res.status(400).send({ error: 'Usuario nao registrado' })
            //return res.status(300).send(user)
            const pass_ok = await crypt.verify(user.password, password);
            if (!pass_ok) return res.status(401).send({ error: 'Erro ao autenticar o usuário' })

            // user.password = ""

            return res.send({ user, token: auth.createToken(user._id) })
        }
        catch (err) {
            return res.status(500).send({ error: 'Erro ao buscar usuário' })
        }
      }
}

module.exports = new UserServices();