import React from "react";
import PlanCard from "./PlanCard";
import girl from "../assets/girl.jpg";
import boy from "../assets/boy.jpg";
import man from "../assets/man.jpg";

export default function Pricing() {
    return (
        <div className="flex flex-col items-center bg-black p-4">
            <div className="mb-2 mt-8 md:mt-12 text-center">
                <h1 className="mb-4 text-5xl md:text-7xl font-black text-orange-500">Customer Reviews</h1>
                <p className="text-xl md:text-2xl text-white">We're that good! This is what our customers have to say</p>
            </div>
            <div className="flex flex-col gap-6 md:gap-8 p-6 md:p-10 xl:flex-row text-white">
                <PlanCard
                    imageSrc={girl}
                    price="MICHELLE AMANI"
                    color="#f97316" // Set the color to #f97316
                    description="The pricing plans are affordable, and the customer service is top-notch. Pamoja Home Fiber has made our online activities much more enjoyable and hassle-free"
                />

                <PlanCard
                    imageSrc={boy}
                    price="MOSES OMONDI"
                    color="gray"
                    description="I have been using Pamoja Home Fiber for over a year now, and I couldn't be happier with the service. The internet speed is consistently fast, allowing me to stream movies, work from home, and video call without any interruptions"
                />

                <PlanCard
                    imageSrc={man}
                    price="GIDEON MURIMI"
                    color="#f97316"
                    description="Whether I'm gaming online, watching HD videos, or working on large files, Pamoja Home Fiber delivers a reliable and lag-free connection."
                />
            </div>
        </div>
    );
}
