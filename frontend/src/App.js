import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import UsuarioContext from './pages/UsuarioContext';

function App() {
  return (
    <div className="App">
      <UsuarioContext >
        <Router>
          <Routes>
             <Route exact path='/' element={<LoginPage />}/>
             <Route path='home/*' element={<HomePage />}/>
          </Routes>
        </Router>
      </UsuarioContext>
      
    </div>
  );
}

export default App;
