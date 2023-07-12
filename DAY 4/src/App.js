
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Nav';
import footer from './footer/footer';

function App() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/foot' element={<footer/>}/>
    </Routes>
    </>
  );
}

export default App;
