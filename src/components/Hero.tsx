import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MyCarousel from './MyCarousel';
import Typed from 'react-typed';
import styles from '../mystyle'
//import pic4 from '../assets/web1.jpg';
// import pic1 from '../assets/web2.jpg';
import logo_1 from '../assets/internet_1.png'
import pic2 from '../assets/web3.jpg';
import pic3 from '../assets/7.jpg';
import pic4 from '../assets/6.jpg';
import pic5 from '../assets/8.jpg';
//import pic3 from '../assets/web4.jpg';
// import pic4 from '../assets/5.jpg';
// import test from '../assets/test.jpg'
// import test2 from '../assets/test2.png'
// import living from '../assets/im17.jpg';

const images = [
    {
        src: pic3,

    },
    {
        src: pic4,

    },
    {
        src: pic5,

    },
    {
        src: pic2,

    },

];

function Hero() {
    return (
        <section className={`bg-slate-900 flex md:flex-row flex-col ${styles.paddingY} sec-home`}>
            <div className={`pd-l flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
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
                <div className='flex flex-row justify-between items-center w-full pr-5'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        The Next <br className='sm:block hidden'/>
                        {" "}
                        <span className='text-orange-500 my-text'>Generation</span> 
                        {/* <br className='sm:block hidden'/> */}
                        Internet Experience
                    </h1>
                    {/* <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted />
                    </div> */}
                </div>
                <p className= {`w-[80%] mt-5 myfont font-normal text-dimWhite text-[18px] leading-[30.8px]`}>Proudly serving Rongai, Tuala and Kiserian. Welcome to Pamoja Home Fiber, your Neighborhood Internet Partner!</p>
            </div>
            {/* <div className={`flex-1 flex dflexsm md:my-0 my-10 relative`}>
                
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
            </div> */}

            <div className={`flex-1 dflexsm flex-col xl:px-0 sm:px-16 px-6`}>
                <MyCarousel slides={images}/>
                    {/* <Carousel className='carousel-div'>
                    {images.map((image, index) => (
                        <Carousel.Item key={index} className='carolhg'>
                            <img src={image.src} alt={`Slide ${index}`} className='carousel-img'/>
                        </Carousel.Item>
                    ))}
                    </Carousel> */}
            </div>

        </section>

    //     <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    //     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    //         <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 w-[80%]">
    //             <img src={logo_1} alt="internet"  className='w-[52px] h-[32px]'/>
    //             <span className='text-white'>
    //               <Typed
    //                 strings = {[
    //                   "Welcome home, netizen! Experience the web like never before with Pamoja Home Fiber",
    //                   "We bring the World to your Doorstep",
    //                   "Call us Now for Immediate Connection at 07 99 745 714",
    //                   "At Pamoja Home Fiber, we prioritize quality, speed, and your satisfaction. Welcome aboard!"
    //                 ]}
    //                 typeSpeed = {150}
    //                 backSpeed = {100}
    //                 loop
    //               />
    //             </span>
    //         </div>
    //         <div className='flex flex-row justify-between items-center w-full pr-5'>
    //           <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
    //             The Next <br className='sm:block hidden'/>
    //             {" "}
    //             <span className='text-orange-500 my-text'>Generation</span> 
    //             {/* <br className='sm:block hidden'/> */}
    //             Internet Experience
    //           </h1>
    //           <div className='ss:flex hidden md:mr-4 mr-0'>
    //             <GetStarted />
    //           </div>
    //         </div>
    //         {/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-[80%]'>
    //               Pamoja Home Fiber 
    //         </h1> */}
    //         <p className= {`${styles.paragraph} w-[80%] mt-5`}>Proudly serving Rongai, Tuala and Kiserian. Welcome to Pamoja Home Fiber, your Neighborhood Internet Partner!</p>
    //     </div>
    //     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    //     {/* <Carousel slides={images}/> */}
    //       {/* <img src={im_1} alt="graphics_1"  className='w-[100%] h-[100%] relative z-[5]'/> */}
          
    //       <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
    //       <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
    //       <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
    //     </div>
    //     <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
    //       <GetStarted />

    //     </div>

    // </section>
    );
}

export default Hero;
