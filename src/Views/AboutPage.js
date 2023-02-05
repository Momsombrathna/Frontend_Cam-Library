import React from 'react';
import NavLog from '../Components/NavLog';
import Footer from '../Components/Footer';
import cover from '../Assets/cover.jpg';
import Feedback from '../Components/Feedback';

const AboutPage = () => {
    return (
        <>
            <NavLog />
            <main>
                <div class="py-16 bg-white">
                    <div class="container m-auto text-gray-600 md:px-12 xl:px-6">
                        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div class="md:7/12 lg:w-6/12">
                                <h2 class="text-2xl text-gray-900 font-bold md:text-5xl">About Cam-Library</h2>
                                <p class="text-xl mt-6 text-gray-600">Cam-Library is an online library, which has hundreds of books to choose. We provide highest quality of ebook to read.</p>
                                <p class="text-xl mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            </div>
                            <div class="lg:w-8/12">
                                <img src={cover} alt="" loading="lazy" className="rounded-xl" />
                            </div>
                        </div>
                        <div className='mt-12'>
                        <Feedback/>
                        </div>
                    </div>
                </div>
            </main>
            

            <Footer />
        </>
    )
}

export default AboutPage