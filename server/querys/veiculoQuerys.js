const db = require('../infra/database');

exports.getVeiculos = function (){
	return db.query('select * from veiculos WHERE quantidadeocupado != ocupacaomax');
}

exports.postVeiculo = function (veiculo){
	const {descricao, ocupacaomax} = veiculo;

	return db.result(`INSERT INTO veiculos(veiculoid, descricao, ocupacaomax, quantidadeocupado) values(DEFAULT, '${descricao}', ${ocupacaomax}, 0);`, [123], r => r.rowCount);
}