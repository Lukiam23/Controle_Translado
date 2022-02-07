import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import CadastroUsuarioPage from './pages/CadastroUsuarioPage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path='login' element={<LoginPage />}/>
           <Route path='cadastro/usuario' element={<CadastroUsuarioPage />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
