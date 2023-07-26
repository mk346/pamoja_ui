import React from "react";
import global from '../assets/global.jpg';


const Cctv = () => {
    return (
        <>
            <section
                className="overflow-hidden bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${global})` }}
            >
                <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Contact Us
                        </h2>

                        <p
                            className="hidden max-w-lg font-bold text-orange-500/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                        >
                            Have questions or need assistance with our fiber internet services? We're here to help! Feel free to reach out to our dedicated support team for any inquiries, technical support, or to explore our various home fiber plans. Get in touch with us today, and let's connect you to a world of seamless internet experiences
                        </p>

                        <div className="mt-4 sm:mt-8">
                            <a
                                href="/"
                                className="inline-block rounded-full bg-orange-500 px-12 py-3 text-sm font-medium text-black transition hover:bg-orange-300 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Connected Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cctv;

