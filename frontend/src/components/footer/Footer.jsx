import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container d-flex justify-content-between align-items-center py-3'>
        <h4 className='footer-title'>ToDo</h4>
        <p className='footer-text m-0'>&copy; 2024 DK</p>
      </div>
    </footer>
  );
}

export default Footer;