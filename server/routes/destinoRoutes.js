const express = require('express')
const destinoService = require('../service/destinoService')
const router = express.Router()

router.get('/destinos', async function (req,res){
	const destinos = await destinoService.getDestinos();
	res.json(destinos);
});

router.post('/destino', async function (req,res){
	const destino = await destinoService.postDestino(req.body);
	res.json(destino);
});

module.exports = router