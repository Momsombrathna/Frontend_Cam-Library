import React, { useState } from 'react';
import Button from './Button';
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';


const Nav = () => {

    let [open,setOpen] = useState(false);

    return (
        <div className=' shadow-md w-full fixed top-0 left-0'>
            <div className=' md:flex items-center justify-between bg-white py-1 md:px-10 px-7'>
            <Link to="/home">
            <div className=' font-bold text-2xl cursor-pointer flex items-center  text-gray-800'>
                    
                    <span className='text-3xl text-indigo-600 mr-1 pt-1'>
                        {/* <DiAtom size="2rem" /> */}
                        <img src={Logo} alt="logo" className=' w-14 h-14'/>
                       
                    </span>
                    Cam-Library
                </div>
            </Link>
            
            <div onClick={()=>setOpen(!open)}  className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
                <BsList name={open? 'close':''} className='hover:text-cyan-600 rounded-md border-2' size="2rem"/></div>
            <ul className={` lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 2xl:pr-28 xl:pr-0 lg:pr-0 md:pr-0
                            w-full lg:w-auto lg:pl-1 pl-9 transition-all duration-500 ease-in
                            ${open ? 'top-10':'top-[-490px]'} `}>
            <div className="flex flex-row gap-1 lg:mt-0 md:mt-5 mt-10">
            <Link to="/login"><Button>Log In</Button></Link>
            <Link to="/signup"><Button>Sign Up</Button></Link>
            </div>
            </ul>
         

            </div>
        </div>
    );
};

export default Nav;