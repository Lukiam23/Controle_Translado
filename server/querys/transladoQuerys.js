const db = require('../infra/database');

exports.getTranslados = function (){
	return db.query('select * from translados');
}

exports.getTransladosByLogin = function (dados){
	const {login} = dados
	return db.query(`select * from translados t inner join veiculos v on t.veiculoid = v.veiculoid inner join destinos as d on d.destinoid = t.destinoid where login = '${login}'`);
}

exports.getUsuarioTranslados = function (dados){
	const {login, turno, data} = dados
	return db.result(`select * from translados where login = '${login}' and turno='${turno}' and data='${data}'`, [123], r => r.rowCount);
}

exports.postTranslado = function (translado){
	const {data, turno, veiculoid, destinoid, login} = translado;
	
	return db.result(`INSERT INTO translados(transladoId, data, turno, veiculoId, destinoId, login) values(DEFAULT, '${data}', '${turno}', ${veiculoid}, ${destinoid}, '${login}');`, [123], r => r.rowCount);
}