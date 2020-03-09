const argon = require('argon2');

class Crypt {
    async encrypt(password){
        const hash = await argon.hash(password);
        return hash;
    }

    async verify(hash, password){
        try {
            const verify = await argon.verify(hash, password);
        return verify;
        } catch (err){
            return err;
        }
        
    }
}

module.exports = new Crypt();