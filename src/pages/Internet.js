import React from "react"
import "keen-slider/keen-slider.min.css"
import "../styles.css"
// import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card.tsx";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";



function Internet() {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
                title="5mbps"
                Text="the speed is 5mbps"/>
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
                      title="10mbps"
                      Text="this is 10mbps"  />

            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
                      title="15mbps"
                      Text="this is 15mbps"  />

            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
                      title="20mbps"
                      Text="this is 20mbps"  />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg"
                      title="30mbps"
                      Text="this is 30mbps"  />
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
