import React from "react";



function Home_bg() {
    const header = [
        {
            url:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        },
    ];

    return (
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-5 px-4 relative">
            <div
                style={{
                    backgroundImage: `url(${header[0].url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height:"150px",
                }}
                className="w-full h-full rounded-2xl"
            ></div>
        </div>
    );
}
export default  Home_bg;
