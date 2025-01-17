import MyCarousel from './MyCarousel';
// import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';
import './Hero.css'
import s1 from '../assets/slides/s1.jpg'
import s2 from '../assets/slides/s2.jpg'
import s3 from '../assets/slides/s3.jpg'
import s4 from '../assets/slides/s4.jpg'
import s6 from '../assets/slides/s6.jpg'


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
    src: s6,
    alt: "image_6"

},

];



function Hero() {
    const navigate = useNavigate();
    const handleButtonClick = () => { 
        navigate('/contact');
    }
    const handleAnotherClick = () => {
        navigate('/internet')
    }
    return (
        <div className='sec-home bg-slate-900'>
            <div className='container-wrap'>
                <div className='div-wrap'>
                    <h1 className='mytext flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        The Next <br className='sm:block hidden'/>
                        {" "}
                        <span className='text-orange-500 my-text'>Generation</span> 
                        Internet Experience
                    </h1>
                </div>
                <div className='paragraph-wrap'>
                    <p className={`w-[100%] mt-5 myfont font-normal text-dimWhite text-[18px] leading-[30.8px]`}>Proudly serving Rongai, Ngong, Tuala, Kiserian and Matasia. {<br />} Welcome to Pamoja Home Fiber, your Neighborhood Internet Partner!</p>
                    <div className='button-wrap'>
                        <button className='ct-btn' onClick={handleButtonClick}>Get Connected</button>
                        <button className='pk-btn' onClick={handleAnotherClick}>Browse Packages</button>
                    </div>
                </div>
            </div>
            <div className='carousel-wrap'>
                <MyCarousel slides={images}/>
            </div>

        </div>
    );
}

export default Hero;
