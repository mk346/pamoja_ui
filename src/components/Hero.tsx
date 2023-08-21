import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Typed from 'react-typed';

import nasaImage from '../assets/nasa.jpg';
import mrembo from '../assets/mrembo.jpg';
import msupa from '../assets/msupa.jpg';

const images = [
    {
        src: nasaImage,
        caption: {
            title: 'Welcome to Pamoja HomeFibre',
            subtitle: 'The #1 Internet Solutions Provider',
            typedStrings: [
                'Reliable Internet Packages.',
                'CCTV installation.',
                'PamojaFlix for Entertainment.'
            ]
        }
    },
    {
        src: mrembo,
        caption: {
            title: 'Explore Mrembo',
            subtitle: 'Discover the Beauty of Mrembo',
            typedStrings: [
                'Luxurious Accommodations.',
                'Scenic Views and Landscapes.',
                'Exquisite Dining Experiences.'
            ]
        }
    },
    {
        src: msupa,
        caption: {
            title: 'Experience Msupa',
            subtitle: 'Your Ultimate Adventure Destination',
            typedStrings: [
                'Thrilling Outdoor Activities.',
                'Explore Nature and Wildlife.',
                'Create Unforgettable Memories.'
            ]
        }
    }
];

function Hero() {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index} style={{ height: '900px' }}>
                    <img src={image.src} alt={`Slide ${index}`} />
                    <Carousel.Caption>
                        <p className='md:text-3xl sm:text-2xl text-orange-500 font-bold mt-5 pb-5'>{image.caption.title}</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-4 pb-5'>{image.caption.subtitle}</h1>
                        <div className='flex items-center justify-center'>
                            <Typed
                                className='md:text-2xl sm:text-xl text-orange-500 font-bold md:pl-2 pl-1 pb-5'
                                strings={image.caption.typedStrings}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Hero;
