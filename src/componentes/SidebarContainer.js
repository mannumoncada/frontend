import React from 'react'
import Menu from './Menu'
import Logo from '../../AdminLTELogo.png'
import { Link } from 'react-router-dom'


const SidebarContainer = () => {

  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-0 bg-navy'>
        <Link to={'/home'} className='brand-link'>
            <img src={Logo} alt='AdminLTE Logo' className='brand-image img-circle elevation-3' style={{opacity: '.8'}}/>
            <span className='brand-text font-weight-medium'> Proyecto Final </span>
        </Link>
        <div className='sidebar'>
            <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
                <div className='info'>
                    &nbsp;
                </div>

                <div className='info'>
                    &nbsp;
                </div>

                <div className='info'>
                    <Link to={'/home'} className='d-block'> Menú Principal</Link>
                    <Menu></Menu>
                </div>
                
                
            </div>

        </div>
    </aside>
  )
}

export default SidebarContainer