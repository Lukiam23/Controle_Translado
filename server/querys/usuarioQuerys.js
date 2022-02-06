const db = require('../infra/database');

exports.getUsuarios = function (){
	return db.query('select * from usuarios');
}

exports.postUsuario = function (usuario){
	const {nome, login, senha, tipo} = usuario;

	return db.result(`INSERT INTO Usuarios(usuarioId, nome, login, senha, tipo) values(DEFAULT, '${nome}', '${login}' , crypt('${senha}', gen_salt('bf')), '${tipo}' )`, [123], r => r.rowCount);
}