import React from 'react';

const AdventureStoriesBook = (props) => {

    const slides = [
        {Image: 'https://cdn.asaha.com/assets/thumbs/cc1/cc14560f1947a55c20d69eec200ef996.jpg',
            link:"https://www.pdfdrive.com/the-adventure-bible-niv-book-of-devotions-365-days-of-adventure-e176378350.html",
            tittle:"The Adventure Bible, NIV Book of",
            smalltittle:"Devotions. 365 Days of Adventure",
            description:"757 Pages · 2010 · 1.96 MB", 
            download:"https://www.pdfdrive.com/download.pdf?id=176378350&h=e192f02c738e4c0e410a3e09f80ecb2e&u=cache&ext=pdf"},
        {Image: 'https://cdn.asaha.com/assets/thumbs/85a/85a35f958ae2256ea80cae32e36f2456.jpg' ,
            link:"https://www.pdfdrive.com/adventure-bible-book-of-devotions-for-early-readers-nirv-365-days-of-adventure-e163577030.html",
            tittle:"Adventure Bible Book of Devotion", 
            smalltittle:"for Early Readers, NIrV. 365 Days of Adventure",
            description:"821 Pages · 2014 · 2.75 MB", 
            download:"https://www.pdfdrive.com/adventure-bible-book-of-devotions-for-early-readers-nirv-365-days-of-adventure-d163577030.html"},
        {Image: 'https://cdn.asaha.com/assets/thumbs/364/36455fc64f3b68039141d64325716024.jpg' ,
            link:"https://www.pdfdrive.com/the-story-for-little-ones-e183771778.html",
            tittle:"The Story for Little ", 
            smalltittle:"Ones", 
            description:"87 Pages · 2011 · 7.54 MB", 
            download:"https://www.pdfdrive.com/the-story-for-little-ones-d183771778.html"},
        {Image: '' ,
            link:"",
            tittle:"",
            smalltittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            description:"", 
            download:""},]


    return (
        <>
        <div className='flex items-stretch'>
            
            <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                {
                slides.map((slide,index)=>{
                    return(
                        <div className=' inline-block'>
                        <div class=" mr-2 max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <div class="p-4" >
                                <div className='flex justify-center items-center'><img src={slide.Image} target="_blank" alt="" className='w-40 h-60' /></div>
                                <div className='flex flex-col mb-4 mt-2'>
                                    <p href={slide.link} target='_blank' class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">{slide.tittle}</p>
                                    <p className='text-xs'>{slide.smalltittle}</p>
                                </div>
                              
                                <span className='flex flex-row gap-2'>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.description}</p>
                                    <a href={slide.link} target='_blank' className=' hover:text-black hover:font-bold'>. Views</a>
                                </span>
                                <a href={slide.download} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Download
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                        </div>

                       

                    )   
                })
                }
            </div>
            
        
        </div>
            

        </>
      
    );
};

export default AdventureStoriesBook;