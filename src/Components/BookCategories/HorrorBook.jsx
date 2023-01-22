import React from 'react';
import Icon from 'react-icons-kit';
import {arrow_left} from 'react-icons-kit/ikons/arrow_left';
import {arrow_right} from 'react-icons-kit/ikons/arrow_right';

const HorrorBook = (props) => {

    const slides = [
        {Image: '',
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
            tittle:" ", 
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
            download:""},
        {Image: '' ,
            link:"",
            tittle:"", 
            smalltittle:"",
            description:"", 
            download:""},]


    const slideLeft = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    const slideRight = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;

    }


    return (
        <>
        <div className='flex items-stretch'>
            <Icon icon={arrow_left} onClick={slideLeft} size="2rem" className=" md:hidden self-center float-left rounded-full hover:bg-gray-200  py-1 font-bold  p-1"/>
            <div id='slider' className=' w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-scroll no-scrollbar'>
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
            <Icon icon={arrow_right} onClick={slideRight} size="2rem" className=" self-center float-right rounded-full hover:bg-gray-200  py-1 font-bold  p-1"/>
        </div>
        </>
      
    );
};

export default HorrorBook;