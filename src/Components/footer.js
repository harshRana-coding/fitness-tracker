import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='text-center mt-3'>
        <Link to='/about'>About Us</Link> |{' '}
        <Link to='/contact'>Contact Us</Link> |{' '}
        <Link to='/'>Privacy Policy</Link>
      </p>
      <h5 className='text-center'>Copyright &copy; 2024 Fitness. All rights reserved.</h5>
    </div>
  )
}

export default Footer