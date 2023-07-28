import React from 'react';
import Typed from 'react-typed';
import "../styles.css";

const Hero = () => {
    return (
        <div className='text-white pb-11 pt-10 header'>
            <div className='max-w-[800px] mt-12 md:mt-24 w-full h-[300px] md:h-[400px] mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-xl sm:text-xl text-orange-500 font-bold mt-5'>Welcome to Pamoja HomeFibre</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-4'>The #1 Internet Solutions Provider</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-xl sm:text-xl text-base font-bold py-2'>We offer </p>
                    <Typed
                        className='md:text-xl sm:text-xl text-orange-500 font-bold md:pl-2 pl-1'
                        strings={['Reliable Internet Packages.', 'CCTV installation.', 'PamojaFlix for Entertainment.']}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </div>

                <p className='md:text-xl text-base font-bold text-white'> Fast, Reliable, and Affordable Internet connectivity for individual homes or multitenant buildings.</p>

                <button className='bg-orange-500 w-[180px] md:w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'>Request Installation</button>
            </div>
        </div>
    );
};

export default Hero;
