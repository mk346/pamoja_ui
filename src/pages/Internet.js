import "keen-slider/keen-slider.min.css"
import "../styles.css"
import Search from "../components/Search";
import Footer from "../components/Footer";
import Navbar from "../components/Navbarx";
import Cable from "../components/Cable";
import Fiber from "../components/Fiber";



function Internet() {
    return (

        <div className="">
            <Navbar />
            <Cable />
            <Fiber />
            <Search />
            <Footer />
        </div>
    );
}

export default Internet;
