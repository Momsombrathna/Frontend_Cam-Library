import React, {useEffect} from 'react';
import Nav from '../Components/Nav';
import Classicbook from '../Components/BookCategories/ClassicBook';
import Footer from '../Components/Footer';
import AdventureStoriesBook from '../Components/BookCategories/AdventureStoriesBook';

const Home = () => {

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    return (
        <>
        <Nav />
        <main className=" bg-slate-100 w-full">
            
           <div className='w-md pt-32 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Classic Books</h1>
           <Classicbook/>
           </div>

           <div className='w-md pt-16 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Aventure Story Books</h1>
           <AdventureStoriesBook /> 
           </div>
           <div className=" mt-5">
            <Footer/>
           </div>
           
       </main>

        </>
    );
};

export default Home;