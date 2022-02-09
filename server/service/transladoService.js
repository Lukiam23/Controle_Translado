const transladoQuerys = require('../querys/transladoQuerys')


exports.getTranslados = async function() {
	return await transladoQuerys.getTranslados()
};

exports.getUsuarioTranslados = async function (dados){
    return await transladoQuerys.getUsuarioTranslados(dados)
            .then(data => data > 0)
            .catch(error =>{
                return error
            })

};

exports.getTransladosByLogin = async function (dados){
    return await transladoQuerys.getTransladosByLogin(dados);
};


exports.postTranslado = async function(translado) {
	return await transladoQuerys.postTranslado(translado)
	.then(data => {
        return "Destino criado"
    })
    .catch(error =>{
    	return error
    })
};