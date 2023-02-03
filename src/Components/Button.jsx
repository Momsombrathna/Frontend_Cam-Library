import React from 'react';

const Button = (props) => {
    return (
        <button className=' bg-blue-700 px-2 text-white font-[Arial] py-1 rounded md:ml-8 hover:ml-8 hover:bg-slate-500 duration-500'>
            {props.children}
        </button>
    );
};

export default Button;