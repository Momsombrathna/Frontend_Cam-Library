import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Welcome from '../Assets/welocome.jpg';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const[id,idchange]=useState("");
    // const[name,namechange]=useState("");
    const[accept,acceptchange] = useState("confirm");
    const[email,emailchange] = useState("");
    const[password,passwordchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        let regonize={id,email,password,accept};
        // console.log(regobj);
        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(regonize)
        }).then((res)=>{
            // if(password === confrim_password) {
            //     toast.success('Register Succcessfully.');
            //     navigate('/home')
            // }else{
            //     toast.error('The Repeat password does not match.');
            // }
            toast.success('Register Succcessfully.');
            toast.info('Please Enter the Username and passsword to Login into page.');
            navigate('/login')
        }).catch((err)=>{
            toast.error('Failed :'+err.message);
        });
        
    }

    // handle password eye
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

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
        <div class=" py-36 p-5">
            <div class="flex bg-white text-gray-500 rounded-lg shadow-xl border-2 overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-2/4 bg-cover"><img src={Welcome} className='rounded-l-lg' alt="welcome" /></div>
                <form onSubmit={handlesubmit} class="w-full p-4 lg:w-1/2 md:px-10 px-5">
                    <div class="text-center mb-4">
                        <h2 class="text-3xl font-bold text-gray-700 text-center">Register Account</h2>
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">Your Name</label>
                        <input value={id} onChange={e=>idchange(e.target.value)} class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='name' placeholder='Enter username' type="text" required />
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">Email Address</label>
                        <input value={email} onChange={e=>emailchange(e.target.value)} class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" id="email" name="email" placeholder='Enter email' type="email" required  />
                    </div>
                    <div class="mt-3">
                        <div class="flex justify-between">
                            <label class="block text-gray-600 text-sm font-bold mb-1">Password</label>
                        </div>
                        <div className=" relative">
                        <input type={type} value={password} onChange={e=>passwordchange(e.target.value)} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Enter password' minlength="8" required />
                        <span onClick={handleToggle} className='top-2 absolute right-5'>
                            <Icon className=' hover:text-gray-700' icon={icon} size={22} />
                        </span>
                        </div>
                    </div>
                    
                    
                    <div class="flex items-center mb-2 mt-6 pl-2">
                        <input value={accept} onChange={e=>acceptchange(e.target.value)} id="remember" type="checkbox"  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">Remember me</label>
                    </div>
                    <div class="mt-3">
                        <button class="bg-blue-700 text-white text-center font-medium py-2 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type='submit'>Register now</button>
                    </div>
                    <div class="mt-4 flex flex-row items-center justify-center gap-2">
                        <div>Already have an account ?</div>
                        <Link to="/login"><div className='font-bold text-blue-600 text-md'>Log In</div></Link>  
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    );
};

export default SignUp;