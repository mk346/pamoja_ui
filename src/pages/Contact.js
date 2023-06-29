import React from "react";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Photo from "../components/Photo";
// import Map from "../components/Map";



function Contact() {
    return (
        <div>

           <Photo />
            <Contacts />
            {/*<Map />*/}
            <Footer />

        </div>
    );
}

export default Contact;
