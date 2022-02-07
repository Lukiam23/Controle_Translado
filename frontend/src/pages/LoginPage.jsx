import styles from '../css/LoginPage.module.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useUsuarioContext } from './UsuarioContext';
import { useState } from "react";

const axios = require('axios')


export default function LoginPage(){
	const [error, setError] = useState(false);
	const {register, handleSubmit, formState: { errors } } = useForm();
	const navigate = useNavigate();
	const {usuario, setUsuario} = useUsuarioContext();
	
	const onSubmit = async function(usuario){
		const response = await axios({
			url:'http://localhost:3001/usuario',
			method: 'GET',
			params:{...usuario}
		});
		if(response.data === false){
			setError(true);
		} else {
			const res = response.data[0]
			setUsuario(res)
			navigate("/home")
		}
	};

	const errorLogin = {
		'color': 'red',
		'font-size': '16px'
	}

	return(
		<div className={styles.Container}>
			<div className={styles.loginContainer}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Login" {...register("login")}/>
					<input type="password" placeholder="Senha" {...register("senha")}/>
					<label style={error ? errorLogin: {'display': 'none'}}>Senha/Login inválidos.</label>
					<input type='submit' value="Acessar"/>
				</form>
			</div>
		</div>
	);
}