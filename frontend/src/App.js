import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import CadastroUsuarioPage from './pages/CadastroUsuarioPage.jsx';
import CadastroVeiculoPage from './pages/CadastroVeiculoPage.jsx';
import UsuarioContext from './pages/UsuarioContext';

function App() {
  return (
    <div className="App">
      <UsuarioContext >
        <Router>
          <Routes>
             <Route path='login' element={<LoginPage />}/>
             <Route path='home/cadastro/usuario' element={<CadastroUsuarioPage />}/>
             <Route path='home/cadastro/veiculo' element={<CadastroVeiculoPage />}/>
             <Route path='home' element={<HomePage />}/>
          </Routes>
        </Router>
      </UsuarioContext>
      
    </div>
  );
}

export default App;
