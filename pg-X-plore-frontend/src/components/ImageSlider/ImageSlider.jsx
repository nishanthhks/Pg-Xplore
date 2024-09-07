import React, { useState } from "react";

import "./ImageSlider.scss";
import ArrowUp from "../../assets/icons/ArrowUp";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="slider-container">
      <div className="big-image">
        <div className="arrow" onClick={prevSlide}>
          <ArrowUp />
        </div>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />

        <div className="arrow" onClick={prevSlide}>
          <ArrowUp />
        </div>
      </div>
      <div className="small-image">
        {images.slice(1).map((img) => {
          return <img src={img} alt="" />;
        })}
      </div>
    </div>
  );
}
