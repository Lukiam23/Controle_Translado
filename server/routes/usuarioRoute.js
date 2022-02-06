const express = require('express')
const usuarioService = require('../service/usuarioService')
const router = express.Router()

router.get('/usuarios', async function (req,res){
	const usuarios = await usuarioService.getUsuarios();
	res.json(usuarios);
});

module.exports = router