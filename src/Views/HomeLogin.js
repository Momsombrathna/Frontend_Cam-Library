import React from 'react';
import Footer from '../Components/Footer';
import NavLog from '../Components/NavLog';
import Classicbook from '../Components/BookCategories/ClassicBook';
import AdventureStoriesBook from '../Components/BookCategories/AdventureStoriesBook';
import BestBookOfTheWeek from '../Components/BookCategories/BestBookOfTheWeek';
import HistoricalFictionBook from '../Components/BookCategories/HistoricalFictionBook';
import CrimeBook from '../Components/BookCategories/CrimeBook';
import HorrorBook from '../Components/BookCategories/HorrorBook';


const HomeLogin = () => {

    return (
        
        <>

            <NavLog/>
            
            {/* *************************** Body ****************************/}
            <main className=" bg-slate-100 w-full h-rotate-0">
                
            <div className='w-md pt-32 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Best book of the week</h1>
            <BestBookOfTheWeek/>
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Historical Fiction books</h1>
            <HistoricalFictionBook/>
            </div>


            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Classic books</h1>
            <AdventureStoriesBook/>
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>AdventureStories books</h1>
            <Classicbook/>
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>CrimeBook</h1>
            <CrimeBook />
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>HorrorBook</h1>
            <HorrorBook />
            </div>


            <div className=" mt-5">
                <Footer/>
            </div>
            
        </main>

    </>
       
    );
};

export default HomeLogin;