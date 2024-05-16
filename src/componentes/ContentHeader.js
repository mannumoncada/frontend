import React from 'react'
import { Link } from 'react-router-dom';

const ContentHeader = ({titulo, breadCrumb1, breadCrumb2, ruta1}) => {

  return (

    <section className='content-header'> 
    <div className='container-fluid'>
        <div className='row mb-2'>
            {/*columna con titulo */}
            <div className='col sm-6'>
                <h1><b>{titulo}</b></h1>
            </div>
            {/*columna con items*/}
            <div className='col sm-6'>
                <ul className='breadcrumb float-sm.right'>
                <li className='breadcrumb-item'><Link to = {ruta1}> {breadCrumb1} </Link></li>
                <li className='breadcrumb-item active'>{breadCrumb2} </li>
                </ul>
            </div>
        </div>
    </div>
    </section>
  );
}

export default ContentHeader