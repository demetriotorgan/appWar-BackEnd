const express = require('express');
const { adicionarMissao } = require('../controller/missaoController');
const router = express.Router();

router.post('/salvar-missao', adicionarMissao);

module.exports = router;