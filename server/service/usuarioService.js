const usuarioQuerys = require('../querys/usuarioQuerys')

exports.getUsuarios = async function() {
	return await usuarioQuerys.getUsuarios()
}