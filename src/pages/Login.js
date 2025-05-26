import React from 'react'
import { Link } from 'react-router-dom';
import intro_img from '../assets/images/intro_img.png'


function Login() {
  return (
    <div className="flex">
        <div className='flex-2'>
            <h2 className=''> Login</h2>
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
            <div class="divider flex items-center justify-center">
                <hr class="my-8 h-[1.5px] w-60 rounded-2xl bg-[#30333C] dark:bg-gray-700" />
                <div class="absolute h-2.5 w-2.5 rounded-full border-2 border-white bg-[#30333C]"></div>
            </div>
            <div></div>
        </div>
        <div className='flex-1 max-h-full'>
            <img className='' src={intro_img} alt="" />
        </div>
    </div>
  )
}

export default Login;