const Missao = require('../model/Missao');

module.exports.adicionarMissao = async(req,res)=>{
    const {missao, data, horario, premio} = req.body;

    try {
        const novaMissao = new Missao({missao, data, horario, premio});
        await novaMissao.save();
        res.status(201).json({msg:'Missão cadastrada com sucesso'});
    } catch (error) {
        res.status(500).json({msg:'Erro ao cadastrar missão'});
    }
};

module.exports.carregarMissoes = async(req,res)=>{
    try {
        const missoes = await Missao.find().exec();
        res.json(missoes);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Erro carregar missão'});
    }
};