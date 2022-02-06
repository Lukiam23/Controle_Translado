const express = require('express')
const veiculoService = require('../service/veiculoService')
const router = express.Router()

router.get('/veiculos', async function (req,res){
	const veiculos = await veiculoService.getVeiculos();
	res.json(veiculos);
});

router.post('/veiculo', async function (req,res){
	const veiculos = await veiculoService.postVeiculo(req.body);
	res.json(veiculos);
});

module.exports = router