import React from 'react'

const CarouselControls = ({prev, next}) => {
  return (
    <div>
        <button className="carousel-control left" onClick={prev}>Prev</button>
        <button className="carousel-control right" onClick={next}>Next</button>
    </div>
  )
}

export default CarouselControls