import React from "react";
import '../styles.css';
import contactImage from "../assets/contact.png"; // Import the image



function Photo() {
    return(
        <div>
            <section className="text-gray-700 body-font relative">
                <div id="image-container">
                    <div className="animate-pulse">
                    <img src={contactImage}  style={{ height: "550px" ,width: "100%" }}  alt="Example Image" />
                    </div>

                </div>
            </section>

        </div>

    );
}

export default Photo;