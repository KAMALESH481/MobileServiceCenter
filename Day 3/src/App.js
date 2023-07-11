
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Nav';

function App() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/home' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
