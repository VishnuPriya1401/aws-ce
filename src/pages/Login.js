import React, { useState } from 'react'
import { images } from '../assets.js';
import Validation from '../LoginValidation.js';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    
  return (
    <div className="flex w-full flex-col items-center justify-center">
        <h2 className='text-[#30333C] font-bold mb-4 text-[1.4rem]'> Login</h2>
        <form action="" onSubmit={handleSubmit} className='flex flex-col justify-start gap-3'>
            <div className="flex flex-col items-start">
                <label htmlFor="email" className='text-[#30333C] font-semibold'>Email</label>
                <div className='block rounded-[5px] bg-gradient-to-b from-[#76767600] via-[#76767620] to-[#767676] p-[1.5px]'>
                    <div className='flex rounded-[5px] items-center justify-start bg-[#F3F9DE] p-[1px] pl-[5px] text-[#767676]'>
                        <img src={images.mail_icon} alt="" className='size-5 mr-3 rounded-[5px]'/>
                        <input type="email" placeholder='Enter email' name='email'
                        className='focus:outline-none focus:ring-0 focus:border-transparent rounded-[5px] p-1 bg-[#F3F9DE] text-[#767676]' 
                        onChange={handleInput} />
                    </div>
                </div>
                {errors.email && <span className='text-red-600'>{errors.email}</span>}
            </div>
            <div className="flex flex-col items-start">
                <label htmlFor="password" className='text-[#30333C] font-semibold'>Password</label>
                <div className='block rounded-[5px] bg-gradient-to-b from-[#76767600] via-[#76767620] to-[#767676] p-[1.5px]'>
                    <div className='flex rounded-[5px] items-center justify-start bg-[#F3F9DE] p-[1px] pl-[5px] text-[#767676]'>
                        <img src={images.lock_icon} alt="" className='size-5 mr-3 rounded-[5px]'/>
                        <input type="password" placeholder='Enter password' name='password'
                        className='focus:outline-none focus:ring-0 focus:border-transparent rounded-[5px] p-1 bg-[#F3F9DE] text-[#767676]' 
                        onChange={handleInput}/>
                    </div>
                </div>
                {errors.password && <span className='text-red-600'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn bg-[#30333C] p-2 mt-5 text-white rounded-[2px] cursor-pointer'>Login</button>
        </form>
        <div className="divider flex items-center justify-center">
            <hr className="my-8 h-[1.5px] w-60 rounded-2xl bg-[#30333C] dark:bg-gray-700" />
            <div className="absolute h-2.5 w-2.5 rounded-full border-2 border-white bg-[#30333C]"></div>
        </div>
        <div className='flex gap-8 w-full justify-center items-center m-4'>
            <img className='size-10 cursor-pointer' src={images.aws_icon} alt="" />
            <img className='size-10 cursor-pointer' src={images.azure_icon} alt="" />
            <img className='size-10 cursor-pointer' src={images.gcp_icon} alt="" />
        </div>
    </div>
  )
}

export default Login;