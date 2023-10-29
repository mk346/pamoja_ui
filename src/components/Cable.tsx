import React from "react";
import global from '../assets/cable.jpg';

const Cable = () => {
    return (
        <>
            <section
                className="relative overflow-hidden bg-cover bg-top bg-no-repeat"
                style={{
                    backgroundImage: `url(${global})`,
                    height: '450px', // Adjust the height for smaller devices
                    width: '100%',   // Set the width to 100% to fit the screen
                }}
            >
                {/* Image overlay */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-20"
                ></div>

                <div className="bg-black/25 p-4 md:p-12 lg:px-16 lg:py-24 relative">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                            Fibre Packages
                        </h2>

                        <p
                            className="hidden max-w-lg txt-cl md:mt-6 md:block md:text-lg md:leading-relaxed font-bold flex justify-center" // Add 'flex justify-center' classes
                        >
                            Sustainably connecting you to the World. Welcome to the greener side of the internet with Pamoja Home Fiber <br/> We have a Package for Everyone
                        </p>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Cable;
