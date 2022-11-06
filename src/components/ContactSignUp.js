import React from 'react';
import validate from './validateInfo';
import useContact from './useContact';
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';

const ContactSignUp = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useContact(
        submitForm,
        validate
      );
    
      return (
        <div id='contact-sign-up' className='d-flex flex-sm-column align-items-sm-center justify-content-sm-center'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
             Contact Me
            </h1>
            <p className='contact-sign-p'>Hi there, contact me to ask me about anything you have in mind.</p>
            <div className="d-sm-flex flex-sm-row align-items-sm-center justify-content-start">
                <div className='firstname'>
                    <label className='first-label'>First name</label>
                    <input
                        id='first_name'
                        className=''
                        type='text'
                        name='firstname'
                        placeholder='Enter your first name'
                        value={values.firstname}
                        onChange={handleChange}
                    />
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>
                <div className='lastname'>
                    <label className='last-label'>Last name</label>
                    <input
                        id='last_name'
                        className=''
                        type='text'
                        name='lastname'
                        placeholder='Enter your last name'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>
            </div>
            <div className='email'>
              <label className='email-label'>Email</label>
              <input
                id='email'
                className=''
                type='email'
                name='email'
                placeholder='yourname@email.com'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='message'>
              <label className='message-label'>Message</label>
              <textarea
                id='message'
                className=''
                type='textarea'
                name='message'
                placeholder="Send me a message and I'll reply you as soon as possible..."
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && <p>{errors.message}</p>}
            </div>
            <span className='d-flex flex-row align-items-center justify-content-start check-con'>
              <input type="checkbox" className='' />
              <p>You agree to providing your data to Taiwo Akerele who may contact you.</p>
            </span>
            <button id='btn__submit' className='button' type='submit'>
              Send message
            </button>
          </form>
        </div>
      );
};

export default ContactSignUp;