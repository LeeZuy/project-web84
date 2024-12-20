import React from 'react'

const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className="carousel-indicators">
        {slides.map((_, index) => (
            <button
             className={`carousel-indicator-item${
                currentIndex === index ? ' active' : ''}`}
                onClick={() => switchIndex(index)}>

                </button>
        ))}
    </div>
  );
}

export default CarouselIndicators