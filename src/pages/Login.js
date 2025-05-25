import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="d-flex">
        <div>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password'/>
                </div>
                <button className='btn'>Login</button>
                <p>New User ? <Link to={'/register'}>Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login;