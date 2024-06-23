import React from 'react'
import Layout from './layout'
import './styles/registration.css';
import { Link } from 'react-router-dom';

function registration() {
  return (
    <Layout>
      <div className='formContainer'>
        <form>
          <h3>Registration</h3>
          <div className='inputs'>
            <div className='username'>
              <input type='text' placeholder='Enter Username' />
            </div>
            <div className='email'>
              <input type='email' placeholder='Enter Email' />
            </div>
            <div className='password'>
              <input type='text' placeholder='Enter Password' />
            </div>
            <div className='cpassword'>
              <input type='text' placeholder='Enter Confirm Password' />
            </div>
          </div>
          <div className='labels'>
            <div className='loginText'>
              <spam>Already have an Account ?</spam>
            </div>
            <div className='login'>
              <Link to="/login" className=' text-light text-decoration-none'>Login</Link>
            </div>
          </div>
          <div className='btn'>
            <button>Register</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default registration
