import React from 'react'
import Typed from 'react-typed'
import "../styles.css"

const Hero = () => {

    return (
        <div className='text-white pb-11 pt-10 header'>
            <div className='max-w-[800px] mt-[96px] w-full h-[400px] mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-2xl sm:text-2xl text-orange-500 font-bold mt-5'>Welcome to Pamoja HomeFibre</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>The #1 Internet Solutions Provider</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-2xl sm:text-2xl text-xl font-bold py-4'>Fast,Flexible and Dependable solutions for</p>
                    <Typed
                    className='md:text-2xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
                        strings={['Fibre internet.','CCTV installation.','IPTV.']}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </div>

                <p className='md:text-2xl text-xl font-bold text-white'>We offer fast, reliable and affordable internet connectivity for individual homes or multitenant buildings. </p>

                <button className='bg-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Request Installation</button>

            </div>
        </div>
    )
}

export default Hero;