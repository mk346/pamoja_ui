import React from 'react';
import MyCarousel from './MyCarousel';
import Typed from 'react-typed';
import styles from '../mystyle'
import logo_1 from '../assets/internet_1.png'
import s1 from '../assets/slides/s1.jpg'
import s2 from '../assets/slides/s2.jpg'
import s3 from '../assets/slides/s3.jpg'
import s4 from '../assets/slides/s4.jpg'
import s5 from '../assets/slides/s5.jpg'
import s6 from '../assets/slides/s6.jpg'
import s7 from '../assets/slides/s7.jpg'
import s8 from '../assets/slides/s8.jpg'
import s9 from '../assets/slides/s9.jpg'
import s10 from '../assets/slides/s10.jpg'

const images = [
{
    src: s1,
    alt: "image_1"

},
{
    src: s2,
    alt: "image_2"

},
{
    src: s3,
    alt: "image_3"

},
{
    src: s4,
    alt: "image_4"

},
{
    src: s5,
    alt: "image_5"

},
{
    src: s6,
    alt: "image_6"

},
{
    src: s7,
    alt: "image_7"

},
{
    src: s8,
    alt: "image_8"

},
{
    src: s9,
    alt: "image_9"

},
{
    src: s10,
    alt: "image_10"

},
];

function Hero() {
    return (
        <section className='bg-slate-900 flex md:flex-row flex-col sec-home'>
            <div className='container-wrap'>
                <div className='sub-div flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 hide-div'>
                    <img src={logo_1} alt="internet"  className='w-[52px] h-[32px]'/>
                    <span className='text-white'>
                    <Typed
                        strings = {[
                        "Welcome home, netizen! Experience the web like never before with Pamoja Home Fiber",
                        "We bring the World to your Doorstep",
                        "Call us Now for Immediate Connection at 07 99 745 714",
                        "At Pamoja Home Fiber, we prioritize quality, speed, and your satisfaction."
                        ]}
                        typeSpeed = {150}
                        backSpeed = {100}
                        loop
                    />
                    </span>
                </div>
                <div className='div-wrap'>
                    <h1 className='mytext flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        The Next <br className='sm:block hidden'/>
                        {" "}
                        <span className='text-orange-500 my-text'>Generation</span> 
                        Internet Experience
                    </h1>
                </div>
                <div className='paragraph-wrap'>
                    <p className= {`w-[80%] mt-5 myfont font-normal text-dimWhite text-[18px] leading-[30.8px]`}>Proudly serving Rongai, Tuala and Kiserian. {<br/>} Welcome to Pamoja Home Fiber, your Neighborhood Internet Partner!</p>
                </div>
                
            </div>
            <div className='carousel-wrap'>
                <MyCarousel slides={images}/>
            </div>

        </section>
    );
}

export default Hero;
