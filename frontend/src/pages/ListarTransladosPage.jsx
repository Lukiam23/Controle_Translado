import styles from '../css/ListarTransladosPage.module.css'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useUsuarioContext } from './UsuarioContext';

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
		setTranslados(response.data)
	},[]);


	return (
		<div className={styles.Container}>
			
		</div>
	);
}
