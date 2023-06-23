import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Cards from "../components/Cards";
import AccordionLayout from '../components/Accordion/AccordionLayout/AccordionLayout';
import Footer from "../components/Footer";
import Accordion from "../components/Accordion/AccordionLayout/Accordion";
import Pricing from "../components/Pricing";
import Home_bg from "../components/Home_bg";
import React from "react";



function Home() {
    return(
        <div>
            <Home_bg />
            <Hero />
            <About />
            <Cards />
            <Accordion />
            <Pricing />
            <Footer />



        </div>
    );

}

export default Home;