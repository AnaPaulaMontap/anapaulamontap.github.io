import React from 'react';
import './navbar.css'
import logo from './LogoSample_ByTailorBrands(11)(1).png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserCheck, faLaptopCode, faGlobe } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faUserCheck, faLaptopCode, faGlobe)

function Navbar (props){
  
    return(
        <div>
        <div className='headerNav'>
        <Link to="/" className="logoHome"> <img src={logo} className="logo"alt="logo"/></Link>
        <Link  to="/sobremi"className="about">SOBRE MI</Link>
        <Link to="/proyectos"className="proyect">PROYECTOS</Link>
        <Link to="/contacto" className="contact">CONTACTO</Link>
        </div>

        <Link  to="/sobremi"className="mobileNavAbout"><FontAwesomeIcon  icon='user-check'/></Link>
        <Link to="/proyectos"className="mobileNavProject"><FontAwesomeIcon  icon='laptop-code'/></Link>
        <Link to="/contacto" className="mobileNavContact"><FontAwesomeIcon  icon='globe'/></Link>
       
        </div>
    )
    
}

export default Navbar