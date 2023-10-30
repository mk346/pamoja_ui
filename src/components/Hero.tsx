import React from 'react';
import MyCarousel from './MyCarousel';
import Typed from 'react-typed';
import styles from '../mystyle'
import logo_1 from '../assets/internet_1.png'
import im_1 from '../assets/im_2.jpg'
import im_2 from '../assets/im_1.jpg'
import im_3 from '../assets/im_3.jpg'
import im_4 from '../assets/im_4.jpg'
import im_5 from '../assets/im_6.jpg'
import im_6 from '../assets/im_11.jpg'
import im_7 from '../assets/myweb_4.jpg'
import im_8 from '../assets/myweb_5.jpg'
import im_9 from '../assets/myweb_6.jpg'
import im_10 from '../assets/im_8.jpg'
import im_11 from '../assets/im_9.jpg'
import im_12 from '../assets/im_10.jpg'

const images = [
{
    src: im_1,
    alt: "image_1"

},
{
    src: im_2,
    alt: "image_2"

},
{
    src: im_3,
    alt: "image_3"

},
{
    src: im_4,
    alt: "image_4"

},
{
    src: im_5,
    alt: "image_5"

},
{
    src: im_6,
    alt: "image_6"

},
{
    src: im_7,
    alt: "image_7"

},
{
    src: im_8,
    alt: "image_8"

},
{
    src: im_9,
    alt: "image_9"

},
{
    src: im_10,
    alt: "image_10"

},
{
    src: im_11,
    alt: "image_11"

},
{
    src: im_12,
    alt: "image_12"

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
                        "At Pamoja Home Fiber, we prioritize quality, speed, and your satisfaction. Welcome aboard!"
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
