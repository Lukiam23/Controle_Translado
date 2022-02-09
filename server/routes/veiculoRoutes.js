const express = require('express')
const veiculoService = require('../service/veiculoService')
const router = express.Router()

router.get('/veiculos', async function (req,res){
	const veiculos = await veiculoService.getVeiculos();
	res.json(veiculos);
});

router.get('/veiculosviaveis', async function (req,res){
	const dados = {
		data:req.query.data,
		turno:req.query.turno
	}
	
	const veiculos = await veiculoService.getVeiculosViaveis(dados);
	res.json(veiculos);
});


router.post('/veiculo', async function (req,res){
	const veiculos = await veiculoService.postVeiculo(req.body);
	res.json(veiculos);
});

module.exports = router