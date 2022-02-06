const db = require('../infra/database');

exports.getTranslados = function (){
	return db.query('select * from translados');
}

exports.postTranslado = function (translado){
	const {data, turno, veiculoId, destinoId} = translado;
	return db.result(`INSERT INTO translados(transladoId, data, turno, veiculoId, destinoId) values(DEFAULT, '${data}', '${turno}', ${veiculoId}, ${destinoId});`, [123], r => r.rowCount);
}