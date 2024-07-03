import React, { useState } from 'react';
import Layout from './layout';
import './styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import axios from 'axios';

const ContactUs = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    if (!fname || !lname || !email || !message) {
      alert('Please fill in all the required fields.');
      return;
  }
    e.preventDefault();
    setSubmitted(true);


    try {
      const response = await axios.post('http://localhost:3000/contact',{
        fname,
        lname,
        email,
        message
      })
      if(response.status === 200) {
        setSubmitted(true);
      }
    }
    catch(e) {
      console.error('Error submitting form:', e);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="contactContainer">
        <h2 className='text-center my-5'>Have Some Questions ? </h2>
        <div className='formContactControl d-flex justify-content-evenly align-items-center'>
          <div className='imgContactContainer'>
            <span className='fs'><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></span>
          </div>
          <div className='formContactContainer d-flex flex-column'>
            {submitted ? (
              <div className="success-message">Thank you! Your message has been sent.</div>
            ) : (
              <form className="contact-form d-flex flex-column" onSubmit={handleSubmit}>
                <label>
                  Fname : 
                   <input
                    type="text"
                    value={fname}
                    onChange={(e) => setfName(e.target.value)}
                    required
                    placeholder='Enter First Name'
                  />
                </label>
                <label>
                  Lname :
                  <input
                    type="text"
                    value={lname}
                    onChange={(e) => setlName(e.target.value)}
                    required
                    placeholder='Enter Last Name'
                  />
                </label>
                <label>
                  Email :
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Enter Email'
                  />
                </label>
                <label>
                  Message :
                   <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder='Enter Message'
                  />
                </label>
                <button type="submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
