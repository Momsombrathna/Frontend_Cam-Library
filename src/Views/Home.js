import React, {useEffect} from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import ClassicBook from '../Components/BookCategories/ClassicBook'
import AdventureStoriesBook from '../Components/BookCategories/AdventureStoriesBook';
import HistoryBook from '../Components/BookCategories/HistoryBook'
import CrimeBook from '../Components/BookCategories/CrimeBook'
import HorrorBook from '../Components/BookCategories/HorrorBook'
import HisoricalFictionBook from '../Components/BookCategories/HistoricalFictionBook'

const Home = () => {

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    return (
        <>
        <Nav />
        <main className=" bg-slate-100 w-full">
            
        <div className='w-md pt-32 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Classic books</h1>
            <ClassicBook/>
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Adventure Stories Book </h1>
            <AdventureStoriesBook/>
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>History books</h1>
            <HistoryBook/>
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Crime books</h1>
            <CrimeBook/>
            </div>

            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Horror books</h1>
            <HorrorBook/>
            </div>
            
            <div className='w-md pt-16 2xl:px-60 xl:px-0 lg:px-0 md:px-0 sm:px-0'>
            <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Hisorical Fiction books</h1>
            <HisoricalFictionBook/>
            </div>

           <div className=" mt-5">
            <Footer/>
           </div>
           
       </main>

        </>
    );
};

export default Home;