const db = require('../infra/database');

exports.getDestinos = function (){
	return db.query('select * from destinos');
}

exports.postDestino = function (destino){
	const {nome, sigla} = destino;
	return db.result(`INSERT INTO destinos(destinoid, nome, sigla) values(DEFAULT, '${nome}', '${sigla}');`, [123], r => r.rowCount);
}