import styles from '../css/CadastroUsuarioPage.module.css';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUsuarioContext } from './UsuarioContext';

const axios = require('axios')

export default function CadastroUsuarioPage(){
	const {usuario, setUsuario} = useUsuarioContext();
	const {register, handleSubmit, setError, formState: { errors } } = useForm();
	const [existLogin, setExistLogin] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async function(usuario){
		const response = await axios({
			url:'http://localhost:3001/usuario',
			method: 'POST',
			data:{...usuario}
		});
		if(response.data === "Usuario criado"){
			navigate("/home")
		} else if(response.data === "Login já existente"){
			setExistLogin(true)
		} 
	};

	const redBorder = {
		'border': 'solid red 2px'
	};

	if(usuario.tipo !== 'administrador') return(<h1>Acesso Negado</h1>);

	return(
		<div className={styles.Container}>
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Nome" {...register("nome", { required: true })}/>
					{errors.nome && <span>Nome é obrigatório</span>}
					<input type="text" style={ existLogin ? redBorder : {}} className={styles.checkButton} placeholder="Login" {...register("login", { required: true })}/>
					{errors.login && <span>Login é obrigatório</span>}
					<span style={existLogin ? {} :{'display': "none"}}>Login já existe</span>
					<input type="text" placeholder="Senha" {...register("senha", { required: true })}/>
					{errors.senha && <span>Senha é obrigatória</span>}
					<select name="tipo" {...register("tipo")}>
						<option value="aluno">Aluno</option>
						<option value="administrador">Administrador</option>
					</select>

					<input type='submit' value="Cadastrar"/>
				</form>
			</div>
		</div>
	);
}