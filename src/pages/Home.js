import React from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import '../styles.css';
import Hero from "../components/Hero";



function Home() {
    return(
        <div>
            <Hero />
            <About />
            <Cards />
            <Testimonials/>
            <Accordion />
            <Pricing />
            <Footer />



        </div>
    );

}

export default Home;