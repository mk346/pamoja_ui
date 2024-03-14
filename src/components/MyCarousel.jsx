import {useState, useEffect} from 'react'
import styles from '../mystyle'
import {ArrowBigLeft, ArrowBigRight} from "lucide-react";



const MyCarousel = ({ slides }) => {
    const [slide, setSlide] = useState(0)
    const autoScroll = true
    let slideInterval
    const intervalTime = 8000



    // function to move to the next slide
    const nextSlide = () => {
      setSlide(slide === slides.length - 1 ? 0 : slide + 1)

    }
    
    // fct to move to previous slide
    const prevSlide = () => {
      setSlide (slide === 0 ? slides.length - 1 : slide - 1)

    }

    // function to automate autoscroll
    function auto(){
      slideInterval = setInterval(nextSlide, intervalTime)
    } 

    useEffect(() => {
      if(autoScroll) {
        auto()
      }
      return () => clearInterval(slideInterval)
    }, [slide])

  return (
    <div className='carousel-box'>
      {/* className="arrow arrow-left" */}
        <button onClick={prevSlide} className='img-slider-btn stroke' style={{ left: 0}}><ArrowBigLeft/></button>
        {slides.map((item, id) => {
        return <img src={item.src} alt={item.alt} key={id} className={slide === id ? "slide" : "slide slide-hidden"}/>
        })}
        {/* arrow arrow-right */}
        <button onClick={nextSlide}  className='img-slider-btn' style={{ right: 0}}><ArrowBigRight/></button>
        <span className='indicators slide-hidden'>
            {slides.map((_, id) => {
                return <button key={id} onClick={() => setSlide(id)} className={slide === id ? "indicator": "indicator indicator-inactive"}></button>
            })}
        </span>
    </div>
  )
}

export default MyCarousel