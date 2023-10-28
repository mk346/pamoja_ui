import React from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Reviews from "../components/Reviews";
import '../styles.css';
import styles from '../mystyle'
import Hero from "../components/Hero";
import Navbar from "../components/Navbarx";




function Home() {
    return(
        <div>
            <Navbar/>
            <div className='w-full'>
                <Hero />
            </div>
            <About />
            <Cards />
            <Accordion />
            <Reviews />
            <Footer />



        </div>
    );

}

export default Home;