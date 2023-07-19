
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Nav';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import TermsAndConditions from './components/terms';
import Feedback from './side/Feedback';
import Page from './Home/Page';
import Issues from './Home/Issues';
import State from './Home/State';

function App() {
  return (
    <>
    <Routes>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/foot' element={<footer/>}/>
    <Route exact path='/about' element={<AboutUs/>}/>
    <Route exact path='/terms' element={<TermsAndConditions/>}/>
    <Route exact path='/feedback' element={<Feedback/>}/>
    <Route exact path='/gum' element={<Page/>}/>
    <Route exact path='/issue' element={<Issues/>}/>
    <Route exact path='/state' element={<State/>}/>
    </Routes>
    </>
  );
}

export default App;
