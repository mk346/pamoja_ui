import React from "react";
import global from '../assets/global.jpg';

const Cctv = () => {
    return (
        <>
            <section
                className="overflow-hidden bg-cover bg-black bg-top bg-no-repeat"
                style={{
                    backgroundImage: `url(${global})`,
                    height: '450px',
                    width: '100%', // Adjust the width to fit the container
                }}
            >
                <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Our Services
                        </h2>
                        <p className="hidden max-w-lg text-orange-500/90 md:mt-6 md:block md:text-lg md:leading-relaxed font-bold">
                            At Pamoja Home Fiber Company, we strive to provide you with the best-in-class fiber optic internet services for your home. Experience the power of seamless connectivity and explore a world of endless possibilities
                        </p>
                        <div className="mt-4 sm:mt-8">
                            <a
                                className="group relative inline-block overflow-hidden border border-orange-500 px-8 py-3 focus:outline-none focus:ring"
                                href="/"
                            >
                                <span className="absolute inset-y-0 left-0 w-[2px] bg-orange-500 transition-all group-hover:w-full group-active:bg-orange-500"></span>
                                <span className="relative text-sm font-medium text-white transition-colors group-hover:text-black">
                  Get Connected Today
                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cctv;
