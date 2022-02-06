const destinoQuerys = require('../querys/destinoQuerys')

exports.getDestinos = async function() {
	return await destinoQuerys.getDestinos()
}

exports.postDestino = async function(destino) {
	return await destinoQuerys.postDestino(destino)
	.then(data => {
        return "Destino criado"
    })
    .catch(error =>{
    	return error
    })

}