const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

//Registra novo Usuario
module.exports.adicionarUsuario = async(req,res)=>{
    // console.log("📩 Chegou requisição:", req.body);
    const {email, password} = req.body;

    try {
        const userExist= await User.findOne({email});
        if(userExist) return res.status(400).json({msg:'Usuário já cadastrado'});

        const user = new User({email, password});
        await user.save();
        res.status(201).json({msg:'Usuário cadastrado com sucesso'});
    } catch (error) {
        res.status(500).json({msg:'Erro ao cadastrar usuario'});
    }
};

module.exports.fazerLogin = async(req,res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({msg:'Usuário não encontrado'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg:'Senha inválida'});

        const token = jwt.sign({
            userID:user._id,
            email:user.email
        },
        process.env.JWT_SECRET,{
            expiresIn: '1h'
        });
        res.json({token});
    } catch (error) {
        res.status(500).json({msg:'Erro no servidor'});
    }
};