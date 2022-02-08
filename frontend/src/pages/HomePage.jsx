import { useUsuarioContext } from './UsuarioContext';
import { useNavigate, Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from '../css/HomePage.module.css'
import CadastroUsuarioPage from './CadastroUsuarioPage.jsx';
import CadastroVeiculoPage from './CadastroVeiculoPage.jsx';
import CadastroDestinoPage from './CadastroDestinoPage.jsx';
import { useState, useEffect } from "react";

export default function HomePage(){
	const navigate = useNavigate();
	const [display, setDisplay] = useState(null);
	const {usuario, setUsuario} = useUsuarioContext();

	const logout = () =>{
		setUsuario({})
		navigate('/')
	}

	if(usuario.tipo === 'aluno'){
		return(
			<>      
				<header>
					<label>Olá, {usuario.nome}</label>
					<nav>
						<div onClick={logout} className={styles.link}>Logout</div>
					</nav>
				</header>

			
			</>
		);
	} else if(usuario.tipo === 'administrador'){
		return(
			<>
				<Routes>
				 <Route path='/' element={<CadastroUsuarioPage />}/>
				 <Route path='/cadastro/veiculo' element={<CadastroVeiculoPage />}/>
				 <Route path='/cadastro/destino' element={<CadastroDestinoPage />}/>
				</Routes>         
				<header>
					<label>Olá, {usuario.nome}</label>
					<nav>
						<Link to='/home' className={styles.link} >Cadastrar Usuário</Link>
						<Link to='cadastro/veiculo' className={styles.link} >Cadastrar Veículo</Link>
						<Link to='cadastro/destino' className={styles.link} >Cadastrar Destino</Link>
						<div onClick={logout} className={styles.link}>Logout</div>
					</nav>
				</header>

			
			</>
		);
	} else{
		return (<h1>Not logged</h1>);
	}

	
}