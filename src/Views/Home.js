import React, {useEffect} from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import HomeBook from '../Components/BookComponents/HomeBook';
import { book1, book2, book3, book4, book5, book6 } from '../Components/Data/BookData';

const Home = () => {

    // Use Effect to clear login data
    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    return (
        <>
        <Nav />
        <main className=" bg-slate-100 w-full">
            
        {/* ________________________________________ Adventure Stories Book ________________________________________ */}
           <div className='w-md pt-32 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Adventure Stories Book</h1>
           <div className='flex items-stretch'>
                <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                    {
                        book1.map((item)=>{
                            return(
                                <HomeBook key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>

           </div>

    {/* ________________________________________ Best Book of the Week ________________________________________ */}
           <div className='w-md pt-16 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Best Book of the Week</h1>
           <div className='flex items-stretch'>
                <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                    {
                        book2.map((item)=>{
                            return(
                                <HomeBook key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>

           </div>

        {/* ________________________________________ Crime Book ________________________________________ */}
           <div className='w-md pt-16 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Crime Book</h1>
           <div className='flex items-stretch'>
                <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                    {
                        book3.map((item)=>{
                            return(
                                <HomeBook key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>

           </div>

        {/* ________________________________________ Histrorical Fiction Book ________________________________________ */}
           <div className='w-md pt-16 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Histrorical Fiction Book</h1>
           <div className='flex items-stretch'>
                <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                    {
                        book4.map((item)=>{
                            return(
                                <HomeBook key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>

           </div>

    {/* ________________________________________ Horror Book ________________________________________ */}
           <div className='w-md pt-16 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Horror Book</h1>
           <div className='flex items-stretch'>
                <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                    {
                        book5.map((item)=>{
                            return(
                                <HomeBook key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>

           </div>

    {/* ________________________________________ Classic Book ________________________________________ */}
           <div className='w-md pt-16 2xl:px-48 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
           <h1 className='mb-5 2xl:pl-20 xl:pl-32 lg:pl-16 md:pl-10 sm:pl-10 pl-10 font-bold text-2xl'>Classic Book</h1>
           <div className='flex items-stretch'>
                <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                    {
                        book6.map((item)=>{
                            return(
                                <HomeBook key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>

           </div>

           
        {/* ________________________Footer Side ________________________ */}
           <div className=" mt-5">
            <Footer/>
           </div>
           
       </main>

        </>
    );
};

export default Home;