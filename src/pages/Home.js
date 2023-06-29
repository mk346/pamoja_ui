import React from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import AccordionLayout from '../components/Accordion/AccordionLayout/AccordionLayout';
import Footer from "../components/Footer";
import Accordion from "../components/Accordion/AccordionLayout/Accordion";
import Pricing from "../components/Pricing";
import '../styles.css';
import Hero from "../components/Hero";



function Home() {
    return(
        <div>
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