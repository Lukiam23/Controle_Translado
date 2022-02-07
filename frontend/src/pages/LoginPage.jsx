import styles from '../css/LoginPage.module.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';


export default function LoginPage(){
	const {register, handleSubmit, formState: { errors } } = useForm();
	const navigate = useNavigate();
	
	const onSubmit = data =>{
		console.log(data)
	};

	const redirectCadastro = () =>{
		navigate("/cadastro/usuario")
	}

	return(
		<div className={styles.Container}>
			<div className={styles.loginContainer}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Login" {...register("login")}/>
					<input type="text" placeholder="Senha" {...register("senha")}/>
					<input type='submit' value="Acessar"/>
				</form>

				<div onClick={redirectCadastro} className={styles.Link}>Cadastrar Usuario</div>
			</div>
		</div>
	);
}