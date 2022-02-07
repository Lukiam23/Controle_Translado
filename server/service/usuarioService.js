const usuarioQuerys = require('../querys/usuarioQuerys')

exports.getUsuarios = async function() {
	return await usuarioQuerys.getUsuarios()
}

exports.getUsuarioByLogin = async function(usuario){
    return await usuarioQuerys.getUsuarioByLogin(usuario)
    .then(data =>{
        if(data.length === 1){
            return true
        }

        return false
    })
    .catch(error => error)
}

exports.postUsuario = async function(usuario) {
	return await usuarioQuerys.postUsuario(usuario)
	.then(data => {
        return "Usuario criado"
    })
    .catch(error =>{
    	const errorList = {
    		"23505": "Login já existente"
    	}

    	return errorList[error.code]
    })

}