import {useState} from 'react'
import styles from '../mystyle'
// import PropTypes from 'prop-types';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"

const MyCarousel = ({ slides }) => {
    const [slide, setSlide] = useState(0)
  return (
    <div className='carousel-box'>
        <BsFillArrowLeftCircleFill className="arrow arrow-left"/>
        {slides.map((item, id) => {
        return <img src={item.src} alt={item.alt} key={id} className={slide === id ? "w-[100%] h-[100%] relative z-[5] slide" : "slide slide-hidden"}/>
        })}
        <BsFillArrowRightCircleFill className="arrow arrow-right" />
        <span className='indicators'>
            {slides.map((_, id) => {
                return <button key={id} onClick={null} className='indicator'></button>
            })}
        </span>
    </div>
  )
}

export default MyCarousel