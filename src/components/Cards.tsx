import React from "react";
import Wifi from '../assets/pamojawifi.jpeg'
import Cctv from '../assets/pamojacctv.jpeg'
import Tv from '../assets/pamojatv.jpeg'

const Cards = () => {
    return (
        <div className='w-full py-10 px-4 bg-dark text-white'>
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-7xl font-black text-orange-500 text-center">What We Do</h1>

            <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Wifi} alt="/" />
                    <h2 className='text-xl sm:text-2xl font-bold text-center py-8'>WiFi Internet</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-4 sm:mx-8'>We provide Broadband service that allows subscribers to access the Internet and the Web from anywhere within the zone of our coverage.</p>
                    </div>
                    <button className='bg-orange-500 w-[160px] sm:w-[200px] rounded-md font-medium my-4 mx-auto py-2 sm:py-3 text-black'>WiFi Packages</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Cctv} alt="/" />
                    <h2 className='text-xl sm:text-2xl font-bold text-center py-8'>CCTV Installation</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-4 sm:mx-8'>We do CCTV Planning and Installation. Install security cameras for your home or business at affordable prices. Secure your home today with us</p>
                    </div>
                    <button className='bg-orange-500 w-[160px] sm:w-[200px] rounded-md font-medium my-4 mx-auto py-2 sm:py-3 text-black'>Inquire</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Tv} alt="/" />
                    <h2 className='text-xl sm:text-2xl font-bold text-center py-8'>Android TV Box</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-4 sm:mx-8'>Watch the latest blockbuster movies and series from Hollywood and all over the world through our IPTV online Entertainment platform.</p>
                    </div>
                    <button className='bg-orange-500 w-[160px] sm:w-[200px] rounded-md font-medium my-4 mx-auto py-2 sm:py-3 text-black'>Inquire</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;
