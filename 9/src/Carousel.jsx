import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default function Carousel(obj){
  const [currentIdx, setCurrentIdx] = React.useState(0)
  function goPrevImage() {
    setCurrentIdx((idx) => (idx - 1 +obj.images.length) % obj.images.length)
  }
 function goNextImage() {
    setCurrentIdx((idx) => (idx + 1) % obj.images.length)
  }
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {obj.images.map((src, idx) => (
          <div
            key={idx}
            className={
              idx === currentIdx
                ? 'carousel-item active'
                : 'carousel-item'
            }
          >
            <img alt="" className="d-block w-100" src={src} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="prev"
        onClick={goPrevImage}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="next"
        onClick={goNextImage}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
//END
