import { useUsuarioContext } from './UsuarioContext';
import { useNavigate, Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from '../css/HomePage.module.css'
import CadastroUsuarioPage from './CadastroUsuarioPage.jsx';

export default function HomePage(){
	const navigate = useNavigate();
	const {usuario, setUsuario} = useUsuarioContext();

	const logout = () =>{
		setUsuario({})
		navigate('/login')
	}

	if(usuario.tipo === 'aluno'){
		return( <h1>Home Page Aluno</h1>);
	} else if(usuario.tipo === 'administrador'){
		return(
			<>	         
				<header>
					<label>Olá, {usuario.nome}</label>
					<nav>
						<Link to='cadastro/usuario' className={styles.link} >Cadastrar Usuário</Link>
						<Link to='cadastro/veiculo' className={styles.link} >Cadastrar Veículo</Link>
						<Link to='' className={styles.link} >Cadastrar Destino</Link>
						<div onClick={logout} className={styles.link}>Logout</div>
					</nav>
				</header>
			</>
		);
	} else{
		return (<h1>Not logged</h1>);
	}

	
}