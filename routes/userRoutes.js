const express = require('express');
const router = express.Router();
const { adicionarUsuario, fazerLogin } = require('../controller/userController');

//Registro de usuario
router.post('/registrar-jogador', adicionarUsuario);
router.post('/login', fazerLogin);

module.exports = router;