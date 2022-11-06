import React, { useState } from 'react';
import '../components/Contact.css'
import ContactSignUp from '../components/ContactSignUp';
import ContactSuccess from '../components/ContactSuccess';

const Contact = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
    setIsSubmitted(true);
    }

    return <>
      <div className=''>
        
        {!isSubmitted ? (
          <ContactSignUp submitForm={submitForm} />
        ) : (
          <ContactSuccess />
        )}
      </div>
    </>;
};

export default Contact;