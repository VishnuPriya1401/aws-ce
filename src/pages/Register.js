import React from 'react'
import { Link } from 'react-router-dom';

function Register(){
    return (
        <div className="d-flex">
            <div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Enter email'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="password" placeholder='Enter password'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter password'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder='Enter password'/>
                    </div>
                    <button className='btn'>Register</button>
                    <p>Already a user? <Link to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register;
