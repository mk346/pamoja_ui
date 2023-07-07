import PlanCard from "./PlanCard";
import image1 from "../assets/img_1.jpg";
import image2 from "../assets/img_2.jpg";
import image3 from "../assets/img_3.jpg";




export default function Pricing() {

    return(
        <div className="flex flex-col items-center bg-black p-4">
            <div className="mb-2 mt-12 text-center">
                <h1 className="mb-4 text-7xl font-black text-orange-500">Customer Reviews</h1>
                <p className="text-2xl text-white">We're that good! This is what our customers have to say</p>


            </div>
            <div className="flex flex-col gap-8 p-10 xl:flex-row">
                <PlanCard
                    imageSrc={image1}
                    price="Kijana Wamalwa"
                    color="#f97316" // Set the color to #f97316
                    description="The pricing plans are affordable, and the customer service is top-notch. Pamoja Home Fiber has made our online activities much more enjoyable and hassle-free"
                />

                <PlanCard
                    imageSrc={image2}

                    price="Tom Mboya"
                    color="gray"

                    description="I have been using Pamoja Home Fiber for over a year now, and I couldn't be happier with the service. The internet speed is consistently fast, allowing me to stream movies, work from home, and video call without any interruptions"


                />

                <PlanCard
                    imageSrc={image3}

                    price="Mudavadi"
                    color="#f97316"

                    description=" Whether I'm gaming online, watching HD videos, or working on large files, Pamoja Home Fiber delivers a reliable and lag-free connection."


                />

            </div>
        </div>
    )
}