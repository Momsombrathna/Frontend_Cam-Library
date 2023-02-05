import React, { useState } from 'react';
import Button from './Button';
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import { data } from './Data/BookDataSearch';
import { GiCancel } from 'react-icons/gi';


const Nav = () => {

    let [open,setOpen] = useState(false);

    // modal
    const [modal, setModel] = useState(false);

    // Toggle
    const toggleModel = () =>{
        setModel(!modal)
    }

    // Search engin
    const [filter, setFilter] = useState('');

    const searchText = (event) =>{
        setFilter(event.target.value);
    }

    let dataSearch = (data).filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )

    });

    return (
        // Navvigate before login
        <div className=' w-full fixed top-0 left-0'>
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
                <div className='lg:mt-0 mt-10'>
                <div class="flex justify-start">
                <div class=" xl:w-96">
                    <div onClick={toggleModel} onChange={searchText.bind(this)} class="input-group relative flex flex-row items-stretch w-full">
                    <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-l-lg" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <button class="btn px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                </div>
            <div className="flex flex-row gap-1 lg:mt-0 md:mt-5 mt-10">
            <Link to="/login"><Button>Log In</Button></Link>
            <Link to="/signup"><Button>Sign Up</Button></Link>
            </div>


            </ul>   

            </div>

            {/*********** Pop Up ***********/}
            {modal &&(
                <div className=' 2xl:px-44 xl:px-32 lg:px-24 md:px-16 lg:mt-1 mt-16 px-5  h-auto'>
                <div className=' float-right pr-10 absolute mt-1 pl-1'>
                    <GiCancel onClick={toggleModel} className=' text-gray-700 hover:text-red-500 py-1 ' size="2rem"/>
                </div>
                <div className=" flex flex-wrap gap-2 rounded-md p-5 px-10 w-full h-96 bg-white shadow-lg border-2 overflow-y-scroll">
                        {dataSearch.map((item, index)=>{
                            return(
                                <div className='flex flex-row gap-2 over'>
                                    <div className=' flex flex-col mb-3 gap-2 border-2 p-2 rounded-md'>
                                        <div className='flex justify-center'>
                                            <img src={item.image} alt="" target="_blank" className=' rounded-sm w-20 h-32' />
                                        </div>
                                        <div className='flex flex-col mt-1'>
                                            <p class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">{item.tittle}</p>
                                            <p className='text-xs'>{item.smalltittle}</p> 
                                            <div className=' flex flex-row gap-1 mt-3'>
                                            <div className='px-2 py-1 bg-white border-2 rounded-lg'> 
                                            <a href={item.link} target='_blank' rel="noopener noreferrer" className=' hover:text-blue-700 text-gray-900 font-medium'>Views</a>
                                            </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                        
                                </div>
                            )
                        })}
                </div>
                </div>
            )}
        </div>
    );
};

export default Nav;