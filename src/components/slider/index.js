import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import '../../styles/slider.css';
const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);
    const [springProps, setSpringProps] = useSpring(() => ({
        transform: 'translateX(0%)',
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); 
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setSpringProps({
            transform: `translateX(-${(currentIndex + 1) % slides.length * 100}%)`,
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        setSpringProps({
            transform: `translateX(-${(currentIndex - 1 + slides.length) % slides.length * 100}%)`,
        });
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setSpringProps({
            transform: `translateX(-${index * 100}%)`,
        });
    };

    return (
        <div className='container'>
            <h1 id='slider-section'>Images</h1>
            <div className="slider-container">
                <animated.div className="slides" style={springProps} ref={slideRef}>
                    {slides.map((slide, index) => (
                        <div className="slide" key={index}>
                            <img src={slide.image} alt={`Slide ${index}`} />
                            <div className="content">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </animated.div>
                <div className="dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider;
