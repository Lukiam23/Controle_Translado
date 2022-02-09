import styles from '../css/CriarTransladoPage.module.css'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useUsuarioContext } from './UsuarioContext';

const axios = require('axios')

export default function CriarTransladoPage(){
	const {usuario, setUsuario} = useUsuarioContext();
	const [destinos,setDestinos] = useState([]);
	const [veiculos,setVeiculos] = useState([]);
	const [dadosTranslado, setDadosTranslado] = useState({});
	const {register, handleSubmit, reset, setError, formState: { errors } } = useForm();

	useEffect(async function(){
		const response = await axios({
			url:'http://localhost:3001/destinos',
			method: 'GET'
		});

		const optionsDestino = response.data.map(destino => <option key={destino.destinoid} value={destino.destinoid}>{destino.nome} ({destino.sigla})</option>);
		setDestinos(optionsDestino);

	},[]);

	const onSubmit = async function(dados){
		
		const existeConflito = await axios({
			url:'http://localhost:3001/usuariotranslado',
			method: 'POST',
			data:{...dados, login:usuario.login}
		});

		if(!existeConflito.data){
			setDadosTranslado(dados);

			const response = await axios({
				url:'http://localhost:3001/veiculosviaveis',
				method: 'POST',
				data:{...dados}
			});

			const optionsVeiculos = response.data.map(veiculo => <option key={veiculo.veiculoid} value={veiculo.veiculoid}>{veiculo.descricao}</option>);

			setVeiculos(optionsVeiculos)
		} else {
			alert("Você já solicitou um translado nessa data e turno!")
		}
	};

	const criarTranslado = async function(dados){
		
		const response = await axios({
			url:'http://localhost:3001/translado',
			method: 'POST',
			data:{...dadosTranslado,...dados, login:usuario.login}
		});

		if(response.data === 'Destino criado'){
			setVeiculos([]);
			setDadosTranslado({});
			alert("Translado solicitado com sucesso!")
			reset()
		}
	};

	if(usuario.tipo !== 'aluno') return(<h1>Acesso Negado</h1>);

	if(veiculos.length === 0){
		return(
			<div className={styles.Container}>
				<div className={styles.formContainer}>
					<h1>Solicitar Translado</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input type="date" {...register("data", { required: true })} />
						{errors.data && <span>O campo data é obrigatório</span>}
						<select name="turno" {...register("turno")}>
							<option value="manhã">manhã</option>
							<option value="tarde">tarde</option>
							<option value="noite">noite</option>
						</select>

						<select name="destino" {...register("destinoid", { required: true })} defaultValue="">
							<option value="" disabled>
								Escolha um destino... 
							</option>
							{destinos}
						</select>
						{errors.destinoid && <span>O campo destino é obrigatório</span>}
						
						<input type='submit' value="Buscar veiculos disponíveis"/>
					</form>
				</div>
			</div>
		);
	}

	return(
			<div className={styles.Container}>
				<div className={styles.formContainer}>
					<form onSubmit={handleSubmit(criarTranslado)}>
						<h1>Criar Translado</h1>
						<select name="veiculo" {...register("veiculoid", { required: true })} defaultValue="">
							<option value="" disabled>
								Escolha um veículo... 
							</option>
							{veiculos}
						</select>
						{errors.veiculoid && <span>O campo veículo é obrigatório</span>}
						
						<input type='submit' value="Confirmar translado"/>
					</form>
				</div>
			</div>

	);
}