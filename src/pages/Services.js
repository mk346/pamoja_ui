import React from 'react';
import Footer from '../components/Footer';
import Cctv from '../components/Cctv';
import Embla from '../components/MovieCarousel';
import Stats from '../components/Stats';
import Camera from '../components/Camera';
import Navbar from "../components/Navbarx";


const Services = () => {
    return (
        <div>
            <Navbar />
            <Cctv />
            {/* <Embla /> */}
            <Stats />
            <Camera />
            <Footer />
            {/* Add your page content here */}
        </div>
    );
};

export default Services;
