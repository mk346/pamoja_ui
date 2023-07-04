import React from "react"
import "keen-slider/keen-slider.min.css"
import "../styles.css"
import bronzeImage from "../assets/bronze.png";
import silverImage from "../assets/silver.png";
import goldImage from "../assets/gold.png";
import platinumImage from "../assets/platinum.png";
import diamondImage from "../assets/diamond.png";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card.tsx";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";



function Internet() {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card imagen={bronzeImage}
                title="BRONZE"
                Text="Perfect for light internet users and casual browsing."/>
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={silverImage}
                      title="SILVER"
                      Text="You can stream HD videos,music and work efficiently from home."  />

            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={goldImage}
                      title="GOLD"
                      Text="Enjoy lag-free streaming, smooth online gaming, and speedy downloads"  />

            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={platinumImage}
                      title="PLATINUM"
                      Text="Engage in competitive online gaming and handle bandwidth-intensive tasks effortlessly."  />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen={diamondImage}
                      title="DIAMOND"
                      Text="Unleash the full potential of your online activities with our Diamond package."  />
            )
        }
    ];
    return (
        <div className="">
            <Carousel
                cards={cards}
                height="500px"
                width="100%"
                margin="0 auto"
                offset={200}
                showArrows={false}
            />
            <Footer />
        </div>
    );
}

export default Internet;
