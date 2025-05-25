import React from 'react'

function Login() {
  return (
    <div className='input-area'>
        <div>
            <form action="">
                <div className="input-sec">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="input-sec">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' />
                </div>
                <button className='btn btn-success'>Login</button>
                <p>New User ?</p><p className='btn-reg'>Register</p>
            </form>
        </div>
    </div>
  )
}

export default Login