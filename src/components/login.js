import React from 'react'
import Layout from './layout'
import './styles/registration.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Layout>
      <div className='formContainer'>
        <form>
          <h3>Login</h3>
          <div className='inputs'>
            <div className='username'>
              <input type='text' placeholder='Enter Username' />
            </div>
            <div className='password'>
              <input type='text' placeholder='Enter Password' />
            </div>
          </div>
          <div className='labels'>
            <div className='loginText'>
              <spam>Don't have an Account ?</spam>
            </div>
            <div className='login'>
              <Link to="/signup" className=' text-light text-decoration-none'>Register</Link>
            </div>
          </div>
          <div className='btn'>
            <button>Login</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login
