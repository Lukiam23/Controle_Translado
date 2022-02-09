const transladoQuerys = require('../querys/transladoQuerys')


exports.getTranslados = async function() {
	return await destinoQuerys.getTranslados()
}


exports.postTranslado = async function(translado) {
	return await transladoQuerys.postTranslado(translado)
	.then(data => {
        return "Destino criado"
    })
    .catch(error =>{
    	return error
    })

}