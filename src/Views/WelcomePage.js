import React, {useEffect} from 'react';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import Cover from '../Assets/cover.jpg';

const WelcomePage = () => {

    return (
        <>
        <div className='flex md:flex-row flex-col-reverse justify-center items-center px-8'>
            <div className='flex flex-col justify-center items-center w-96 h-auto gap-5 md:px-0 px-3'>
                <div>
                <h1 className=' md:text-6xl text-5xl font-bold text-slate-700 mb-5'>HELLO & WELCOME</h1>
                <h3 className=' md:text-5xl text-4xl font-bold text-slate-700 md:pl-10 pl-5'>to Cam-Library</h3>
                </div>
                <p className=' text-xl md:pl-10 pl-5'>CamLibrary e-library  can solve your problems about read and also download alot of books from many category.</p>
                <span className=' mt-10'> <Link to="/home"><Button>Read more</Button></Link> </span>
                {/* <p className=''> Don't have an account please</p> */}
                {/* <div className='flex flex-row'>
                    <div><Button>Log in</Button></div>
                    <div><Button>Sign in</Button></div>
                </div> */}
            </div>
            <div className=' md:w-4/6 md:h-5/6 '>
            <img src={Cover} alt="" />
            </div>
            
        </div>



        </>

    );
};

export default WelcomePage;