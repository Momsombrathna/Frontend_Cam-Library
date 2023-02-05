import React from 'react';
import NavLog from '../Components/NavLog';
import Footer from '../Components/Footer';
const ReadBook = () => {
    return (
        <>
            <NavLog />
            <div class="my-32 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        {   /* show book */}
                        <div class="lg:w-8/12">
                            <iframe className='md:w-5/6' src="https://drive.google.com/file/d/10K0MSdv2pfe6lLWjuwKRouufpVd6GKuW/preview" height='650' title="This is a unique title" />
                        </div>
                        {/* Book info */}
                        <div class="md:7/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-5xl">The Adventure Bible, NIV Book of Devotions</h2>
                            <p class="text-xl mt-6 text-gray-600">Devotions. 365 Days of Adventure</p>
                            <p class="text-xl mt-4 text-gray-600"> 757 Pages · 2010 · 1.96 MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ReadBook;