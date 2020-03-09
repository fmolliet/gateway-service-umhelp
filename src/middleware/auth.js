const jwt = require('jsonwebtoken');

class Auth {
    createToken( userId ){
        const token = jwt.sign({ id: userId } , process.env.SECRET)
        
        return token;
    }

    verify(req, res, next) {
        const token = req.header("auth-token");
    
        if (!token) return res.status(401).json({ message: "Acess denied" });
    
        const payload = jwt.verify(token, process.env.SECRET);
    
        req.userId = payload._id;
    
        next();
      }
}

module.exports = new Auth();
