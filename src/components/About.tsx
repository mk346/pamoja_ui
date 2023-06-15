import React from "react";
import laptop from "../assets/laptop.jpg";

const About = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px]  mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="laptop" />
                <div className='flex flex-col justify-center'>
                    <p className='text-orange-500 font-bold'>ABOUT US</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Our Customers Come First</h1>
                    <p> We offer a wide range of services like building communications networks for a company, safeguarding data and information, creating and administering databases, helping troubleshoot problems in computers or mobile devices, ensuring efficiency and security of business information systems.</p>
                </div>
              
            </div>
        </div>
    )
}

export default About;