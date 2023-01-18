import React from 'react';
import Nav from './Components/Nav';
import BookList from './Components/BookList';

const Save = () => {
    return (
        <>
        <Nav />
        <main className=" bg-slate-100 w-full h-rotate-0">
            
           <div className='w-md pt-32 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Currently saved</h1>
           <BookList /> 
           </div>

           <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Favorite books</h1>
           <BookList /> 
           </div>
       </main>

        </>
    );
};

export default Save;