const db = require('../infra/database');

exports.getVeiculos = function (){
	return db.query('select * from veiculos WHERE quantidadeocupado != ocupacaomax');
}

exports.getVeiculoQuantidade = function (dados){
	const {data,turno} = dados;
	const queryTabelaQuantidade = `select veiculoid, count(veiculoid) as quantidade from translados where data='${data}' and turno='${turno}' group by veiculoid`;
	return db.query(`select v.veiculoid,COALESCE(quantidade,0) as quantidade,ocupacaomax, descricao from (${queryTabelaQuantidade}) as t right join veiculos as v on t.veiculoid= v.veiculoid`);
}

exports.postVeiculo = function (veiculo){
	const {descricao, ocupacaomax} = veiculo;

	return db.result(`INSERT INTO veiculos(veiculoid, descricao, ocupacaomax) values(DEFAULT, '${descricao}', ${ocupacaomax});`, [123], r => r.rowCount);
}