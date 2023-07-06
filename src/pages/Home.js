import React from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Embla from "../components/EmblaCarousel";
import Pricing from "../components/Pricing";
import '../styles.css';
import Hero from "../components/Hero";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());



function Home() {
    return(
        <div>
            <Hero />
            <About />
            <Cards />
            <section className="sandbox__carousel">
                <Embla slides={SLIDES} options={OPTIONS} />
            </section>
            <Accordion />
            <Pricing />
            <Footer />



        </div>
    );

}

export default Home;