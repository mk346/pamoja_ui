import React from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

import Pricing from "../components/Pricing";
import '../styles.css';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";






function Home() {
    return(
        <div>
            <Navbar/>
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