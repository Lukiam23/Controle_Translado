const db = require('../infra/database');

exports.getUsuarios = function (){
	return db.query('select * from usuarios');
}


exports.getUsuarioByLogin = function (usuario){
	const {login, senha} = usuario;
	
	return db.query(`select * from usuarios where login='${login.toLowerCase()}' and senha=crypt('${senha}',senha)`)
}

exports.postUsuario = function (usuario){
	const {nome, login, senha, tipo} = usuario;
	return db.result(`INSERT INTO Usuarios(nome, login, senha, tipo) values('${nome.toLowerCase()}', '${login.toLowerCase()}' , crypt('${senha}', gen_salt('bf')), '${tipo}' )`, [123], r => r.rowCount);
}