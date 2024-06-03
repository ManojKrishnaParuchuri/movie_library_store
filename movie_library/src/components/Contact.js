import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <div className="contact-link">
          
        <a href="mailto:2100032430cseh@gmail.com" style={{color:'white'}}>Mail TO ME</a>

        </div>
        <div className="contact-link">
          
          <Link to="https://manojparuchuri.netlify.app/"  style={{color:'white'}}>Visit My First Portfolio</Link>
        </div>
        <div className="contact-link" >
         
          <Link to="https://www.linkedin.com/in/manoj-krishna-mouli-paruchuri-78502a226/"  style={{color:'white'}}>Visit My LinkedIn</Link>
        </div>
        <div className="contact-link" >
          
          <Link to="https://github.com/ManojKrishnaParuchuri"  style={{color:'white'}}>View my GitHub</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
