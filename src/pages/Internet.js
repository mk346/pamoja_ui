import React from "react"
import "keen-slider/keen-slider.min.css"
import "../styles.css"
import bronzeImage from "../assets/eight.png";
import silverImage from "../assets/twelve.png";
import goldImage from "../assets/fifteen.png";
import platinumImage from "../assets/twentyfive.png";
import diamondImage from "../assets/forty.png";
import sixty from "../assets/sixty.png";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card.tsx";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Navbar from "../components/Navbarx";
import Cable from "../components/Cable";



function Internet() {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card imagen={bronzeImage}
                title="STARTER"
                Text="Perfect for Internet Surfing and Emailing.
                "
                />

                
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={silverImage}
                      title="BASIC"
                      Text="Perfect for HD Streaming, Fast Web Browsing and Fast Video Downloading"  />

            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={goldImage}
                      title="PREMIUM"
                      Text="CCTV Capability, Online Gaming and HD Streaming"  />

            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={platinumImage}
                      title="PLATINUM"
                      Text="Perfect for Online Gaming, CCTV Management, Video Conferencing, and Multiple Device Streaming"  />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={diamondImage}
                      title="TITANIUM"
                      Text="Perfect for Online Gaming, CCTV Management, Video Conferencing, and Multiple HD Device Streaming"  />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={sixty}
                      title="ULTIMATE"
                      Text="Unleash the full potential of your Online Gaming, 4K Video Streaming and Video Conferencing"  />
            )
        }
    ];
    return (

        <div className="">
            <Navbar />
            <Cable />
            <Carousel
                cards={cards}
                height="500px"
                width="100%"
                margin="0 auto"
                offset={200}
                showArrows={false}
            />
            <Search />
            <Footer />
        </div>
    );
}

export default Internet;
