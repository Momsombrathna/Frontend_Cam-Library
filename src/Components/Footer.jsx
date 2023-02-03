import React from "react";
import ItemContainer from "./ItemContainer";
import { Icon } from 'react-icons-kit';
import {facebook} from 'react-icons-kit/icomoon/facebook';
import {google} from 'react-icons-kit/icomoon/google';
import {telegram} from 'react-icons-kit/icomoon/telegram';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import {github} from 'react-icons-kit/icomoon/github';

const Footer = () => {
  return (
    <footer className="bg-black text-white fixe">
      {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-blue-600">Cam-Library</span></h1>
        <div>
          <input type="text" placeholder="Search" className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
          <button className="bg-blue-600 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
            Search
          </button>
        </div>
      </div> */}
      <ItemContainer/>     
      <div className="flex lg:flex-row md:flex-col sm-flex-col flex-col lg:gap-36 md:gap-20 sm:gap-10 gap-5 justify-center items-center text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2023 Cam-Library. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span className="flex flex-row gap-5">
          <a href="/"><Icon icon={facebook} size="1.5rem" className=" hover:text-teal-500"/></a>
          <a href="/"><Icon icon={google} size="1.5rem" className=" hover:text-teal-500"/></a>
          <a href="/"><Icon icon={instagram} size="1.5rem" className=" hover:text-teal-500"/></a>
          <a href="/"><Icon icon={telegram} size="1.5rem" className=" hover:text-teal-500"/></a>
          <a href="/"><Icon icon={github} size="1.5rem" className=" hover:text-teal-500"/></a>

        </span>
      </div>
      
    </footer>
  );
};

export default Footer;