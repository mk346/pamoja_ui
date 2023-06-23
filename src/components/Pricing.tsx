import PlanCard from "./PlanCard";

export default function Pricing() {

    return(
        <div className="flex flex-col items-center bg-black p-4">
            <div className="mb-2 mt-12 text-center">
                <h1 className="mb-4 text-7xl font-black text-white">Fibre Packages</h1>
                <p className="text-lg text-white">Choose the right package for you</p>


            </div>
            <div className="flex flex-col gap-8 p-10 xl:flex-row">
                <PlanCard
                    price="2000"
                    color="cyan"
                    name="5mbps"
                    description="Get internet at 5mbps"
                    features={["Fast Web Browsing","Internet Surfing & Email","Unlimited for 30 Days"]}
                    btnText="START"
                />
                <PlanCard
                    price="2500"
                    color="pink"
                    name="10mbps"
                    description="Get internet at 10mbps"
                    features={["Music Streaming","HD Streaming","Fast Video Downloading"]}
                    btnText="START"
                />
                <PlanCard
                    price="2800"
                    color="orange"
                    name="15mbps"
                    description="Get internet at 15mbps"
                    features={["1 user","2projects","5gb"]}
                    btnText="START"
                />
                <PlanCard
                    price="3500"
                    color="green"
                    name="20mbps"
                    description="Get internet at 20mbps"
                    features={["Social Media","Video conferencing","File downloads and uploads"]}
                    btnText="START"
                />
                <PlanCard
                    price="4500"
                    color="red"
                    name="30mbps"
                    description="Get internet at 30mbps"
                    features={["CCTV Capability","Multiple Device Streaming","Online Gaming"]}
                    btnText="START"
                />

            </div>
        </div>
    )
}