import styles from '../css/CadastroUsuarioPage.module.css';
import { useForm } from "react-hook-form";

const axios = require('axios')

export default function CadastroUsuarioPage(){
	const {register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = async function(usuario){
		const response = await axios({
			url:'http://localhost:3001/usuario',
			method: 'POST',
			data:{...usuario}
		});
		console.log(response)
	};

	return(
		<div className={styles.Container}>
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Nome" {...register("nome")}/>
					<input type="text" placeholder="Login" {...register("login")}/>
					<input type="text" placeholder="Senha" {...register("senha")}/>
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