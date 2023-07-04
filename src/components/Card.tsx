import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

interface CardProps {
    imagen: string;
    title: string; // Add a prop for the title
    Text: React.ReactNode;
}

function Card({ imagen, title, Text }: CardProps) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        opacity: 1,
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)"
    });

    return (
        <animated.div
            className={Styles.card}
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <img src={imagen} alt="" />
            <h2 className="mb-4 text-2xl font-black text-white text-center">{title}</h2> {/* Use the 'title' prop */}
            <p className="text-black fw-bold" >{Text}</p>
            <div className={Styles.btnn}>
                <Button text="Request" />
            </div>
        </animated.div>
    );
}

export default Card;
