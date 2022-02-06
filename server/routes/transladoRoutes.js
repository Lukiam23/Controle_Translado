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

module.exports = router