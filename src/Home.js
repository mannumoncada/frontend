import React from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from './componentes/ContentHeader'
import Footer from './componentes/Footer'
import NavBar from './componentes/NavBar'
import SidebarContainer from './componentes/SidebarContainer'

const Home = () => {
  return (
    <div className='wrapper'>
        <NavBar></NavBar>
        <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                
                <ContentHeader
                    titulo = {'Dashboard'}
                    breadCrumb1 = {'Inicio'}
                    breadCrumb2 = {'Dashboard'}
                    ruta1 = {'/home'}
                />

                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-3 col-6'>
                                <div className='small-box bg-teal'>
                                    <div className='inner'>
                                        <h3> Clientes</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className='icon'>
                                        <i className='fas fa-address-card'></i>
                                    </div>
                                    <Link to={'/Clientes'} className='small-box-footer'>Ver Clientes</Link>
                                </div>
                            </div>
                            <div className='col-lg-3 col-6'>
                            <div className='small-box bg-orange'>
                                    <div className='inner'>
                                        <h3> Sedes </h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className='icon'>
                                        <i className='far fa-building'></i>
                                    </div>
                                    <Link to={'/Sedes'} className='small-box-footer'>Ver Sedes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        <Footer></Footer>
    </div>
  );
}

export default Home