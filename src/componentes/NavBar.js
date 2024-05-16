import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate();
    const CerrarSesion = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

  return (
    <nav className='main-header navbar navbar-expand bg-navy elevation-2' >
    <ul className='navbar-nav'>
        {/* elemento para el ícono del menú*/}
        <li className='nav-item'>
            <Link to={'#'} className='nav-link' data-widget='pushmenu' role='button'><i className='fas fa-bars'></i></Link>
        </li>
        {/* elemento para cerrar sesión*/}
        <li className='nav-item d-none d-sm-inline-block'>
            <strong onClick={CerrarSesion} className='nav-link' style={{cursor: 'pointer'}}> Cerrar sesión </strong>
        </li>
    </ul>
    <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
            <Link to={'#'} className='nav-link' data-widget='fullscreen' role='button'><i className='fas fa-expand-arrows-alt'></i></Link>
        </li>
    </ul>
    </nav>
  )
}

export default NavBar