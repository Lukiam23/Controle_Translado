import styles from '../css/CadastroDestinoPage.module.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUsuarioContext } from './UsuarioContext';

const axios = require('axios')

export default function CadastroDestinoPage(){
	const {usuario, setUsuario} = useUsuarioContext();
	const navigate = useNavigate();
	const {register, handleSubmit, reset, setError, formState: { errors } } = useForm();
	const onSubmit = async function(destino){
		const response = await axios({
			url:'http://localhost:3001/destino',
			method: 'POST',
			data:{...destino}
		});
		if(response.data === "Destino criado"){
			alert("Destino criado!")
			reset()
		} 
	};

	if(usuario.tipo !== 'administrador') return(<h1>Acesso Negado</h1>);

	return(
		<div className={styles.Container}>
			<div className={styles.formContainer}>
				<h1>Cadastrar Destino</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Nome" {...register("nome", { required: true })}/>
					{errors.nome && <span>O campo nome é obrigatório</span>}
					
					<input type="text" placeholder="sigla" {...register("sigla", { required: true })}/>
					{errors.sigla && <span>O campo sigla é obrigatório</span>}
					
					<input type='submit' value="Cadastrar"/>
				</form>
			</div>
		</div>
	);
}