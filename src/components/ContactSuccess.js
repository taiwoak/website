import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';
import ContactSignUp from './ContactSignUp';

const ContactSuccess = () => {
  return <div>
    <div className='d-sm-flex flex-sm-column align-items-sm-center justify-content-sm-center'>
      <h1 className='success'>We have received your message!</h1>
    </div>
    <ContactSignUp /> 
  </div>
};

export default ContactSuccess;
