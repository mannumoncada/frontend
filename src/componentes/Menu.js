import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {


  return (
    <nav className='mt-2'>
        <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
            {/* enlace a inicio */}
            <li className='nav-item'>
                <Link to={'/home'} className='nav-link'>
                    <i className='nav-icon fas fa-home text-light'/>
                    <p className='text-light'> Inicio </p>
                </Link>
            </li> 
            {/* enlace a módulo clientes */}
            <li className='nav-item '>
                <Link to={'/clientes'} className='nav-link'>
                    <i className='nav-icon fas fa-address-card text-teal'/>
                    <p className='text-light'> Clientes </p>
                </Link>
            </li> 
            {/* enlace a módulo sedes */}
            <li className='nav-item'>
                <Link to={'/sedes'} className='nav-link'>
                    <i className='nav-icon far fa-building text-orange'/>
                    <p className='text-light'> Sedes </p>
                </Link>
            </li> 
        </ul>
    </nav>
  );
}

export default Menu