import React from 'react';
import Book1 from '../Assets/book1.jpg';
import Icon from 'react-icons-kit';
import {arrow_left} from 'react-icons-kit/ikons/arrow_left'
import {arrow_right} from 'react-icons-kit/ikons/arrow_right'

const BookList = (props) => {

    const slides = [{Image: 'https://cdn.asaha.com/assets/thumbs/9b8/9b88b7c17f496a61fc78505130af288e.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/f09/f093c203496024043455817fd7a7ef3f.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/29c/29c31e04c5e8eb202e16918b95c55351.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/1b9/1b94d59786038bf39a752226f9f7ab24.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/945/945bf6f19ca0bdf75608e630ca081c56.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/52c/52cd4079b54f1fbcb5d6bc581a73618b.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/8a5/8a57e63db9422e1ebac221fe091f7505.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/64d/64d4d633c714131aceee5d717f880e5a.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/436/4363a573dce18de6452986dcee9e54eb.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/c2c/c2c28c5ade653828ce59d8cb5a2a3adf.jpg' ,tittle:"This is a title", description:"This is description"},
    {Image: 'https://cdn.asaha.com/assets/thumbs/354/354365039ed7b8183f062ff5d1b0539d.jpg' ,tittle:"This is a title", description:"This is description"},
    
                    ]


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
                            
                            <div class="p-2">
                                <img src={slide.Image} alt="" className=' w-40 h-60' />
                            
                                    <h5 class="mb-4 mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{slide.tittle}</h5>
                              
                                <span>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{slide.description}</p>
                                </span>
                                <a href="/#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

export default BookList;