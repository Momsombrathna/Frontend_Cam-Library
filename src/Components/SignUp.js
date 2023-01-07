import React from 'react';
import Welcome from './Assets/welocome.jpg';

const SignUp = () => {
    return (
            <div class=" py-36 p-5">
            <div class="flex bg-white text-gray-500 rounded-lg shadow-xl border-2 overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-2/4 bg-cover"><img src={Welcome} className='rounded-l-lg' alt="welcome" /></div>
                <div class="w-full p-4 lg:w-1/2 px-5">
                    <div class="text-center mb-4">
                        <h2 class="text-3xl font-bold text-gray-700 text-center">Register Account</h2>
                    </div>
                    <div class="mt-2">
                        <label class="block text-gray-600 text-sm font-bold mb-2">Your Name</label>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" type="text" required />
                    </div>
                    <div class="mt-2">
                        <label class="block text-gray-600 text-sm font-bold mb-2">Email Address</label>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" id="email" name="email" type="email" required />
                    </div>
                    <div class="mt-2">
                        <div class="flex justify-between">
                            <label class="block text-gray-600 text-sm font-bold mb-2">Password</label>
                        </div>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" type="password" id="pwd" name="pwd" minlength="8" required/>
                    </div>
                    <div class="mt-2">
                        <div class="flex justify-between">
                            <label class="block text-gray-600 text-sm font-bold mb-2">Repeat Password</label>
                        </div>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none" type="password" id="pwd" name="pwd" minlength="8" required/>
                    </div>
                    {/* <div className=" flex flex-row gap-3 mt-5 pl-5">
                        <input className=' rounded-sm' type="checkbox" required />
                        <p className='font-bold text-sm'>Remember me</p>
                    </div> */}
                    <div class="flex items-center mb-3 mt-4 pl-2">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">Remember me</label>
                    </div>
                    <div class="mt-3">
                        <input class="bg-blue-700 text-white text-center font-medium py-2 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type='submit'/>
                    </div>
                    
                </div>
            </div>
        </div>
    
    );
};

export default SignUp;