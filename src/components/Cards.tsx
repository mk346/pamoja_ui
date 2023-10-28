import React from "react";
import Wifi from '../assets/homewifi.jpeg'
import Cctv from '../assets/homecctv.jpeg'
import Tv from '../assets/hometv.jpeg'

const Cards = () => {
    return (
        <div className='w-full py-10 px-4 bg-black text-white'>
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-black text-orange-500 text-center">What We Do</h1>

            <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Wifi} alt="/" />
                    <h2 className='text-xl sm:text-2xl font-bold text-center py-8'>WiFi Internet</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-4 sm:mx-8'>We provide Broadband service that allows subscribers to access the Internet and the Web from anywhere within the zone of our coverage.</p>
                    </div>



                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Cctv} alt="/" />
                    <h2 className='text-xl sm:text-2xl font-bold text-center py-8'>CCTV Installation</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-4 sm:mx-8'>We do CCTV Planning and Installation. Install security cameras for your home or business at affordable prices. Secure your home today with us</p>
                    </div>

                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Tv} alt="/" />
                    <h2 className='text-xl sm:text-2xl font-bold text-center py-8'>Android TV Box</h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-4 sm:mx-8'>Android TV Box seeks to provide and organize digital content for your TV. With android tv box installed on your tv you can access IPTV, and YouTube</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards;
