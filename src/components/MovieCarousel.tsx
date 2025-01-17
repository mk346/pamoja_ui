import "keen-slider/keen-slider.min.css";
import "../styles.css";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/MovieCard";
import Carousel from "../components/Carousel";
import beast from "../assets/beast.jpg";
import ghost from "../assets/ghost.jpg";
import mermaid from "../assets/mermaid.jpg";
import extraction from "../assets/extraction.jpg";
import mother from "../assets/mother.jpg";
function MovieCarousel() {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card
                    imagen={beast}
                    title="BEAST"
                    Text="Experience the gripping tale of love, suspicion, and dark secrets that will keep you at the edge of your seat."
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    imagen={ghost}
                    title="GHOSTED"
                    Text="Cole falls head over heels for enigmatic Sadie but then makes the shocking discovery that she's a secret agent."
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    imagen={mother}
                    title="THE MOTHER"
                    Text="While fleeing from dangerous assailants, an assassin comes out of hiding to protect the daughter she left earlier in life"
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    imagen={mermaid}
                    title="THE LITTLE MERMAID"
                    Text="Ariel is a mermaid princess and the youngest daughter of King Triton, ruler of the merpeople"
                />
            ),
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    imagen={extraction}
                    title="EXTRACTION 2"
                    Text=" Tyler Rake is initially hired to rescue the family of an abusive crime lord from a Georgian prison."
                />
            ),
        },
    ];

    return (
        <div className="bg-black pt-2">
            <h1 className="mb-4 mt-4 text-4xl md:text-7xl font-black text-orange-500 text-center ">
                Pamoja FLIX
            </h1>
            <h2 className="mb-4 mt-4 text-xl md:text-3xl font-black text-white text-center">
                Catch the latest movies and shows in Hollywood and Worldwide!
            </h2>

            <Carousel
                cards={cards}
                height="500px"
                width="100%"
                margin="0 auto"
                offset={200}
                showArrows={false}
            />
        </div>
    );
}

export default MovieCarousel;
