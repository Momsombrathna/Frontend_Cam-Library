import React  from 'react';
import { AiOutlineDownload } from "react-icons/ai";

const  HomeBookLogin = ({item}) => {

    const { image, tittle, smalltittle, description, link, download } = item;

    return (
        <>
            <div className=' inline-block'>
                <div class=" mr-2 max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    
                    <div class="p-4" >
                        <div className='flex justify-center items-center'><img src={image} target="_blank" alt="" className='w-40 h-60' /></div>
                        <div className='flex flex-col mb-4 mt-2'>
                            <p class=" text-md font-bold tracking-tight text-gray-900 dark:text-white">{tittle}</p>
                            <p className='text-xs'>{smalltittle}</p>
                        </div>
                        
                        <span className='flex flex-row gap-2'>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                            
                        </span>
                        <div className='flex flex-row gap-2'>
                            <a href={download} target="_blank" rel="noopener noreferrer" to  class="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Download
                                <AiOutlineDownload size="1.5rem" className='pl-1'/>
                            </a>
                            <div className='px-2 py-1 bg-white border-2 rounded-lg'> 
                            <a href={link} target='_blank' rel="noopener noreferrer" className=' hover:text-blue-700 text-gray-900 font-medium'>Views</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    );
};

export default HomeBookLogin;