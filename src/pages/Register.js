import React, {useState} from 'react'
import Validation from '../RegisterValidation.js'

function Register(){

    const [values, setValues] = useState({
        username:'',
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
        if(errors.username === "" && errors.email === "" && errors.password === "") {
            
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">            
            <h2 className='text-[#30333C] font-bold mb-4 text-[1.4rem]'>Register</h2>
            <form action="" onSubmit={handleSubmit} className='flex flex-col justify-start gap-3'>
                <div className="flex flex-col items-start">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Enter your name' name='username' onChange={handleInput}/>
                    {errors.username && <span className='text-red-600'>{errors.username}</span>}
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter email' name='email' onChange={handleInput}/>
                    {errors.email && <span className='text-red-600'>{errors.email}</span>}
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password' name='password' onChange={handleInput}/>
                    {errors.password && <span className='text-red-600'>{errors.password}</span>}
                </div>  
                { /*                  
                <div className="flex flex-col items-start">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder='Enter password'/>
                </div>
                */}
                <button type='submit' className='btn bg-[#30333C] p-2 text-white rounded-[2px] cursor-pointer'>Register</button>
            </form>        
        </div>
    )
}

export default Register;
