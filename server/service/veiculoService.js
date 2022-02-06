const veiculoQuerys = require('../querys/veiculoQuerys')

exports.getVeiculos = async function() {
	return await veiculoQuerys.getVeiculos()
}

exports.postVeiculo = async function(veiculo) {
	return await veiculoQuerys.postVeiculo(veiculo)
	.then(data => {
        return "Veículo criado"
    })
    .catch(error =>{
    	return error
    })

}