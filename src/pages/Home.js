import About from "../components/About";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Reviews from "../components/Reviews";
import Packages from "../components/Packages";
import '../styles.css';
import Hero from "../components/Hero";
import Navbar from "../components/Navbarx";




function Home() {
    return(
        <div>
            <Navbar/>
            <Hero />
            <About />
            <Packages />
            <Cards />
            <Accordion />
            <Reviews />
            <Footer />



        </div>
    );

}

export default Home;