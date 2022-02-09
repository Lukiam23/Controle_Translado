import styles from '../css/ListarTransladosPage.module.css'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useUsuarioContext } from './UsuarioContext';
import ItemTranslado from "./ItemTranslado.jsx"

const axios = require('axios')

export default function ListarTransladosPage(){
	const [translados, setTranslados] = useState([]);
	const {usuario, setUsuario} = useUsuarioContext();

	useEffect(async function(){
		const response = await axios({
			url:'http://localhost:3001/transladobylogin',
			method: 'POST',
			data: usuario
		});
		const sortTranslados = response.data.sort((t1,t2) => (new Date(t1.data) - new Date(t2.data)));
		const itens = sortTranslados.map(translado => <ItemTranslado key={translado.transladoid} translado={translado}/>)
		setTranslados(itens)
	},[]);


	return (
		<div className={styles.ContainerCenter}>
			<div className={styles.ContainerContent}>
				{translados}
			</div>
		</div>
	);
}
