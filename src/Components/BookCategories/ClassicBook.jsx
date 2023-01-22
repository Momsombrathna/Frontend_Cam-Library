import React from 'react';

const ClassicBook = (props) => {

    const slides = [
        {Image: 'https://cdn.asaha.com/assets/thumbs/1b6/1b6cbd468bda7c09440c3c1d03f4f6b1.jpg',
            link:"https://www.pdfdrive.com/page-1-classic-rock-guitar-tab-f%C2%BAurteen-great-rock-classics-arranged-in-easy-to-read-e42595072.html",
            tittle:"Page 1 CLASSIC ROCK GUITAR TAB",
            smalltittle:"|| Fºurteen great rock classics arranged in easy-to-read ...",
            description:"130 Pages · 2005 · 5.35 MB", 
            download:"https://www.pdfdrive.com/page-1-classic-rock-guitar-tab-f%C2%BAurteen-great-rock-classics-arranged-in-easy-to-read-d42595072.html"},
        {Image: 'https://cdn.asaha.com/assets/thumbs/9a3/9a358da0508ef8a88805b955424ee6c5.jpg' ,
            link:"https://www.pdfdrive.com/classical-form-theory-of-formal-functions-for-the-instrumental-music-of-haydn-mozart-and-beethoven-a-theory-of-formal-functions-for-the-instrumental-music-of-haydn-mozart-and-beethoven-e184858864.html",
            tittle:"Classical Form: Theory of Formal", 
            smalltittle:"Functions for the Instrumental",
            description:"320 Pages · 1998 · 28.7 MB", 
            download:"https://www.pdfdrive.com/classical-form-theory-of-formal-functions-for-the-instrumental-music-of-haydn-mozart-and-beethoven-a-theory-of-formal-functions-for-the-instrumental-music-of-haydn-mozart-and-beethoven-d184858864.html"},
        {Image: 'https://cdn.asaha.com/assets/thumbs/6cf/6cf5e7ca478b325cab5313720de907de.jpg' ,
            link:"https://www.pdfdrive.com/van-halen-30-classics-from-the-legendary-guitar-god-authentic-guitar-tab-authentic-guitar-tab-editions-e157029524.html",
            tittle:"Van Halen: 30 Classics from the Legendary", 
            smalltittle:"Guitar God (Authentic Guitar TAB) (Authentic Guitar-Tab", 
            description:"258 Pages · 2010 · 27.37 MB ", 
            download:"https://www.pdfdrive.com/van-halen-30-classics-from-the-legendary-guitar-god-authentic-guitar-tab-authentic-guitar-tab-editions-d157029524.html"},
        {Image: '' ,
            link:"",
            tittle:"",
            smalltittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            smalltittle:"",
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"",
            smalltittle:"", 
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            smalltittle:"",
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            smalltittle:"",
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            smalltittle:"",
            description:"", 
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            smalltittle:"",
            description:"", 
            download:""},]


    // const slideLeft = () =>{
    //     var slider = document.getElementById("slider");
    //     slider.scrollLeft = slider.scrollLeft - 500;

    // }

    // const slideRight = () =>{
    //     var slider = document.getElementById("slider");
    //     slider.scrollLeft = slider.scrollLeft + 500;

    // }


    return (
        <>
        <div className='flex items-stretch'>
            {/* <Icon icon={arrow_left} onClick={slideLeft} size="2rem" className=" md:hidden self-center float-left rounded-full hover:bg-gray-200  py-1 font-bold  p-1"/> */}
            <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll'>
                {
                slides.map((slide,index)=>{
                    return(
                        <div className=' inline-block'>
                        <div class=" mr-2 max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <div class="p-4" >
                                <div className='flex justify-center items-center'><img src={slide.Image} target="_blank" alt="" className='w-40 h-60' /></div>
                                <div className='flex flex-col mb-4 mt-2'>
                                    <p class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">{slide.tittle}</p>
                                    <p className='text-xs'>{slide.smalltittle}</p>
                                </div>
                              
                                <span className='flex flex-row gap-2'>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.description}</p>
                                    <a href={slide.link} target='_blank' rel="noopener noreferrer" className=' hover:text-black hover:font-bold'>. Views</a>
                                </span>
                                <a href={slide.download} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            {/* <Icon icon={arrow_right} onClick={slideRight} size="2rem" className=" self-center float-right rounded-full hover:bg-gray-200  py-1 font-bold  p-1"/> */}
        </div>
        </>
      
    );
};

export default ClassicBook;