import React from "react";

import {

    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'


const Footer = () => {




    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-white'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>Contact Information</h1>
                <p className='py-4 text-black'>Internet Solutions Provider</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />


                </div>
                <div className='flex flex-col'>
                    <footer className="text-black justify-center">Copyright © 2023 Pamoja Home Fiber | All rights reserved</footer>
                </div>


            </div>

        </div>
    )
}

export default Footer;