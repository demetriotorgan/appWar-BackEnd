const mongoose = require('mongoose');

const missaoSchema = new mongoose.Schema({
    missao:{
        type:String,
        required: true        
    },
    data:{
        type:Date,
        required:true
    },
    horario:{
        type:String,
        required:true
    },
    premio:{
        type:String,        
    }
});

module.exports = mongoose.model('Missao', missaoSchema);