import React from 'react';
import openheimer from '../assets/oppenheimer.jpg';
import transformers from '../assets/transformers.jpg';
import invasion from '../assets/invasion.jpeg';
import formula from '../assets/formula.jpeg';

const EmblaCarousel = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mb-4 mt-4 text-7xl font-black text-orange-500">Pamoja FLIX</h1>
            <h2 className="mb-4 mt-4 text-white text-4xl">Catch the latest shows and movies from Hollywood</h2>
            <div className="carousel w-[1000px] h-[500px] mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={openheimer} alt='boy' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={transformers} alt='couch' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={invasion} alt='faq' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={formula} alt='headphones' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
