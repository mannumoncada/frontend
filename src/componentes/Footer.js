import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mail-footer bg-light'>
        <div className='float-right d-none d-sm-block'>
        <p className='text-gray'><i> v1 - Proyecto de React</i></p>
        </div>
        <p><strong>&copy; 2024 AdminLTE <Link to={'#'}></Link></strong></p>
    </footer>
  )
}

export default Footer