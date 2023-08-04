import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

interface IProps {
    cards: Array<any>; // Update this with the actual type of `cards`
    offset: number; // Update this with the actual type of `offset`
    showArrows: boolean; // Update this with the actual type of `showArrows`
    width: string; // Update this with the actual type of `width`
    height: string; // Update this with the actual type of `height`
    margin: string; // Update this with the actual type of `margin`
}

export default function Carroussel(props: IProps) {
    const table = props.cards.map((element: any, index: number) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(4);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
    // Specify the type for `goToSlide`
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                margin: props.margin,
                background: 'black', // Set the background color to black
            }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}
