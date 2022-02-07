const express = require('express')
const usuarioService = require('../service/usuarioService')
const router = express.Router()

router.get('/usuarios', async function (req,res){
	const usuarios = await usuarioService.getUsuarios();
	res.json(usuarios);
});

router.get('/usuario', async function (req,res){
	const data = {
		login:req.query.login,
		senha:req.query.senha
	}
	console.log(data)
	const usuario = await usuarioService.getUsuarioByLogin(data);
	res.json(usuario);
});

router.post('/usuario', async function (req,res){
	const usuario = await usuarioService.postUsuario(req.body);
	res.json(usuario);
});

module.exports = router