import React from 'react';
import Welcome from './Assets/welocome.jpg';

const Login = () => {
    return (
        <>
        <main className=" bg-slate-100 w-full h-screen">
            <div className='flex flex-row justify-center items-center pt-40'>
                <div className='shadow-2xl rounded-lg drop-shadow-2xl w-80'>
                    <img src={Welcome} className='rounded-l-lg' alt="welcome" />
                </div>
                <div className='shadow-2xl rounded-lg drop-shadow-2xl w-80 '>
                    
                </div>
            </div>
            
        </main>
        </>
    );
};

export default Login;