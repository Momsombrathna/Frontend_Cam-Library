import React from 'react';
import Welcome from './Assets/welocome.jpg';

const SignUp = () => {
    return (
        <div class="py-32">
        <div class="flex bg-white text-gray-500 flexrounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-full bg-cover"><img src={Welcome} className='rounded-l-lg' alt="welcome" /></div>
            <div class="w-full p-8 lg:w-1/2">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-semibold text-gray-700 text-center">Register Account</h2>
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    </div>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Repeat Password</label>
                    </div>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                <div class="mt-8">
                    <button class="bg-blue-700 text-white text-center font-medium py-2.5 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Login</button>
                </div>
                <div class="mt-4 flex items-center justify-center">
                    Already have an account?
                    <a href="#" class="text-xs text-blue-500 uppercase">Sign in</a>
                </div>
            </div>
        </div>
    </div>

    );
};

export default SignUp;