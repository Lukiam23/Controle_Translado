const db = require('../infra/database');

exports.getUsuarios = function (){
	return db.query('select * from usuarios');
}