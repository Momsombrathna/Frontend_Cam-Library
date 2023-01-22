import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Welcome from '../Assets/welocome.jpg';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';


const Login = () => {
    const [username,usernameupdate] = useState('');
    const [password,passwordupdate] = useState('');

    // const servenavigate = useNavigate();

    const usenavigate=useNavigate();
  

    const ProceedLogin = (e) => {
        e.preventDefault();
        if(validate()){
        /// implementation
        // console.log('proceed');
        fetch('http://localhost:8000/user/'+username).then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log(resp)
            if(Object.keys(resp).length===0){
                toast.error('Please Enter valid usernaem.');
            }else{
                if(resp.password === password) {
                    toast.success('Success');
                    sessionStorage.setItem('username', username);
                    usenavigate('/homelogin')
                }else{
                    toast.error('Please Enter valid credentials.')
                }
            }
        }).catch((err)=>{
            toast.error('Login Failed due to : '+err.message);
        })
        
        }
    }

    // Validation
    const validate=()=>{
        let result = true;
        if(username ==='' || username === null){
            result = false;
            toast.warning('Please Enter username');
        }
        if(password ==='' || password === null){
            result = false;
            toast.warning('Please Enter password');
        }
        return result;
    }

    // handle password eye
    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
   
    const handleToggle=()=>{
        if(type === 'password'){
            setIcon(eye);
            setType('text');
        }else{
            setIcon(eyeOff);
            setType('password');
        }
    }

  
    return (
        <>
        <div class="py-36 p-5">
            <div class="flex bg-white text-gray-500 border-2 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-1/2 bg-cover"><img src={Welcome} className='rounded-l-lg' alt="welcome" /></div>
                <form onSubmit={ProceedLogin} class="w-full p-5 lg:w-1/2 md:px-10 px-5">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-700 text-center mb-5">Log In</h2>
                        <p class="text-xl text-gray-600 text-center">Welcome to Cam-Library</p>
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700 text-md font-bold mb-2">User Name</label>
                        <input value={username} onChange={e=>usernameupdate(e.target.value)}  class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Your Username' name='name' type="text"  />
                    </div>
                    <div class="mt-4">
                        <div class="flex justify-between">
                            <label class="block text-gray-700 text-md font-bold mb-2">Password</label>
                            <a href="/#" class="text-sm text-gray-600 hover:text-black hover:underline">Forget Password?</a>
                        </div>
                        <div className=' relative'>
                        <input type={type}  value={password} onChange={e=>passwordupdate(e.target.value)} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Your Password' />
                        <span onClick={handleToggle} className=' text-xl absolute top-1 right-5'>
                            <Icon className=' hover:text-gray-700' icon={icon} size={22} />
                        </span>
                        </div>
                    </div>

                    <div class="mt-8">
                        <button type='submit' class="bg-blue-700 text-white text-center font-medium py-2.5 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Login</button>
                    </div>
                    <div class="mt-6 flex flex-row items-center justify-center gap-2">
                        <div>Don't have an account ?</div>
                        <Link to="/signup"><div className='font-bold text-blue-600 text-md'>Create now</div></Link>  
                    </div>
                </form>
            </div>
        </div>        
        </>
    );
};

export default Login;