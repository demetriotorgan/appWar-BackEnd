const express = require('express');
const { adicionarMissao, carregarMissoes } = require('../controller/missaoController');
const router = express.Router();

router.post('/salvar-missao', adicionarMissao);
router.get('/listar-missao', carregarMissoes);

module.exports = router;