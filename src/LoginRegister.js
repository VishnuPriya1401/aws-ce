import React, {useState} from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { images } from './assets';

function LoginRegister() {

    const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container flex w-screen h-screen overflow-hidden bg-[#F3F9DE]">
      
        <div className='w-1/2 flex flex-col items-center justify-center'>
        {isLogin ? <Login /> : <Register/>}

        <p className='mt-4 text-[#30333C] font-medium'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button className='font-bold ml-2' onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
        </div>
        <div className='w-1/2'>
            <img src={images.intro_img} alt="" className='w-full h-full object-cover' />
        </div>
    </div>
  );
}

export default LoginRegister