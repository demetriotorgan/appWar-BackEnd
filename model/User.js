const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});

//MiddleWare
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    try {
        this.password = await bcrypt.hash(this.password,10);
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('User', userSchema);