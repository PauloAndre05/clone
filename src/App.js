import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Services from './Components/pages/Services';
import Team from './Components/pages/Team';
import Portifolio from './Components/pages/Portifolio';
import Contacto from './Components/pages/Contacto';
import Testimonial from './Components/pages/Testimonial'




import './App.css';
import NavBar from './Components/layout/NavBar';

function App() {
  return (

    <>
    
      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path = '/' element = {<Home/>} />
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/services' element = {<Services/>}/>
        <Route path = '/team' element = {<Team/>}/>
        <Route path = '/portifolio' element = {<Portifolio/>}/>
        <Route path = '/contacto' element = {<Contacto/>}/> 
        <Route path = '/Testimonial' element = {<Testimonial/>}/>
    
      </Routes>
    
    </BrowserRouter>
 
    </>

  );
}

export default App;
