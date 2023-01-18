import React, {useEffect} from 'react';
import Nav from '../Components/Nav';
import BookList from '../Components/BookList';
import Footer from '../Components/Footer';

const Home = () => {

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    return (
        <>
        <Nav />
        <main className=" bg-slate-100 w-full h-rotate-0">
            
           <div className='w-md pt-32 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Classic books</h1>
           <BookList /> 
           </div>

           <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>History books</h1>
           <BookList /> 
           </div>
           <div className=" mt-5">
            <Footer/>
           </div>
           
       </main>

        </>
    );
};

export default Home;