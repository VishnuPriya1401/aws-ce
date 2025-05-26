import React from 'react'
import { Link } from 'react-router-dom';
import intro_img from '../assets/images/intro_img.png'

function Register(){
    return (
        <div className="flex">
            <div className='flex-2'>
                <h2>Register</h2>
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
            <div className='flex-1 max-h-full'>
                <img className='' src={intro_img} alt="" />
            </div>
        </div>
    )
}

export default Register;
