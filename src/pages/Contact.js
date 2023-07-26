import React from "react";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Photo from "../components/Photo";
import Navbar from "../components/Navbar";



function Contact() {
    return (
        <div>
           <Navbar/>
           <Photo />
            <Contacts />
            <Footer />

        </div>
    );
}

export default Contact;
