const express = require('express')
const transladoService = require('../service/transladoService')
const router = express.Router()

router.get('/translados', async function (req,res){
	const translados = await transladoService.getTranslados();
	res.json(translados);
});

router.post('/translado', async function (req,res){
	const translado = await transladoService.postTranslado(req.body);
	res.json(translado);
});

router.post('/usuariotranslado', async function (req,res){
	const numero = await transladoService.getUsuarioTranslados(req.body);
	res.json(numero);
});

module.exports = router