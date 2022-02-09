import styles from '../css/CadastroVeiculoPage.module.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUsuarioContext } from './UsuarioContext';

const axios = require('axios')

export default function CadastroVeiculoPage(){
	const {usuario, setUsuario} = useUsuarioContext();
	const navigate = useNavigate();
	const {register, handleSubmit, reset, setError, formState: { errors } } = useForm();
	const onSubmit = async function(veiculo){
		const response = await axios({
			url:'http://localhost:3001/veiculo',
			method: 'POST',
			data:{...veiculo}
		});
		if(response.data === "Veículo criado"){
			alert("Veículo criado!");
			reset();
		} 
	};

	if(usuario.tipo !== 'administrador') return(<h1>Acesso Negado</h1>);

	return(
		<div className={styles.Container}>
			<div className={styles.formContainer}>
				<h1>Cadastrar Veículo</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Descriçao" {...register("descricao", { required: true })}/>
					{errors.descricao && <span>O campo descrição é obrigatório</span>}
					
					<input type="text" placeholder="Ocupação máxima" {...register("ocupacaomax", { required: true })}/>
					{errors.ocupacaomax && <span>O campo ocupação máxima é obrigatório</span>}
					
					<input type='submit' value="Cadastrar"/>
				</form>
			</div>
		</div>
	);
}