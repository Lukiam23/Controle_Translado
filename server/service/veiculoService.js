const veiculoQuerys = require('../querys/veiculoQuerys')

exports.getVeiculos = async function() {
	return await veiculoQuerys.getVeiculos()
}

exports.getVeiculosViaveis = async function (dados){
    const tabelaVeiculos = await veiculoQuerys.getVeiculoQuantidade(dados);
    return tabelaVeiculos.filter( veiculo => {
        if(veiculo.quantidade < veiculo.ocupacaomax){
            return true
        }
        return false
    })
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