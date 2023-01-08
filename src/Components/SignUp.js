import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Welcome from './Assets/welocome.jpg';


const SignUp = () => {

    const[id,idchange]=useState("");
    // const[name,namechange]=useState("");
    const[accept,acceptchange] = useState("confirm");
    const[email,emailchange] = useState("");
    const[password,passwordchange] = useState("");
    const[confrimpassword,confirmpasswordchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        let regonize={id,email,password,confrimpassword,accept};
        // console.log(regobj);

        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(regonize)
        }).then((res)=>{
            toast.success('Resgister successfully.');
            navigate('/home');
        }).catch((err)=>{
            toast.error('Failed :'+err.message);
        });
    }
    const checkpassword=(e)=>{
        confirmpasswordchange(e.target.value)
        if(password !== confrimpassword){
            toast.warning('Your Reapet password is not match !');
        }else{
            toast.info('Correctly password match');
        }
    }

    return (
        <div class=" py-36 p-5">
        <div class="flex bg-white text-gray-500 rounded-lg shadow-xl border-2 overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-2/4 bg-cover"><img src={Welcome} className='rounded-l-lg' alt="welcome" /></div>
            <form onSubmit={handlesubmit} class="w-full p-4 lg:w-1/2 px-5">
                <div class="text-center mb-4">
                    <h2 class="text-3xl font-bold text-gray-700 text-center">Register Account</h2>
                </div>
                <div class="mt-2">
                    <label class="block text-gray-600 text-sm font-bold mb-2">Your Name</label>
                    <input value={id} onChange={e=>idchange(e.target.value)} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" name='name' type="text" />
                </div>
                <div class="mt-2">
                    <label class="block text-gray-600 text-sm font-bold mb-2">Email Address</label>
                    <input value={email} onChange={e=>emailchange(e.target.value)} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" id="email" name="email" type="email"  />
                </div>
                <div class="mt-2">
                    <div class="flex justify-between">
                        <label class="block text-gray-600 text-sm font-bold mb-2">Password</label>
                    </div>
                    <input value={password} onChange={e=>passwordchange(e.target.value)} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" type="password" id="pwd" name="pwd" minlength="8" />
                </div>
                <div class="mt-2">
                    <div class="flex justify-between">
                        <label class="block text-gray-600 text-sm font-bold mb-2">Repeat Password</label>
                    </div>
                    <input value={confrimpassword} onChange={e=>confirmpasswordchange(e.target.value)} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" type="password" id="pwd" name="pwd" minlength="8" />
                    {/* {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>} */}
                </div>
                {/* <div className=" flex flex-row gap-3 mt-5 pl-5">
                    <input className=' rounded-sm' type="checkbox" required />
                    <p className='font-bold text-sm'>Remember me</p>
                </div> */}
                <div class="flex items-center mb-3 mt-4 pl-2">
                    <input value={accept} onChange={e=>acceptchange(e.target.value)} id="remember" type="checkbox"  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">Remember me</label>
                </div>
                <div class="mt-3">
                    <button onChange={e=>checkpassword(e)} class="bg-blue-700 text-white text-center font-medium py-2 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type='submit'>Register now</button>
                </div>
                
            </form>
        </div>
    </div>
    );
};

export default SignUp;