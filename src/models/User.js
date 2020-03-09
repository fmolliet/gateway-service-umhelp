const { Schema, model } = require('mongoose');
const crypt = require("../utils/crypt");

const userSchema = new Schema({
    email: { type: String,
         required: true,
          unique: true,
           lowercase: true
     },
    password: { type: String,
         required: true, 
         select: false
    },
    created: { type: Date,
         default: Date.now
    }
})


userSchema.pre('save', async function (next) {
    let user = this

    if (!user.isModified('password')) return next()

    user.password = await crypt.encrypt(user.password)
    return next()
})


module.exports = model('User', userSchema)