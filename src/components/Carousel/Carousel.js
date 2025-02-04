import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";

import photo1 from "../../img/photo-1.jpg";
import photo2 from "../../img/photo-2.jpg";
import photo3 from "../../img/photo-3.jpg";

const images = [photo1, photo2, photo3];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section
      id="about"
      className="gallery"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="gallery-title">Über mich</h2>

      <div className="gallery-container">
        {images.map((src, index) => {
          let position = "gallery-item";
          if (index === currentIndex) {
            position += " gallery-item-active";
          } else if (
            index ===
            (currentIndex - 1 + images.length) % images.length
          ) {
            position += " gallery-item-prev";
          } else if (index === (currentIndex + 1) % images.length) {
            position += " gallery-item-next";
          }

          if (index === 1) {
            position += " gallery-item-second";
          }

          return (
            <div key={index} className={position}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          );
        })}

        {!isMobile && (
          <>
            <button className="gallery-controls-prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="gallery-controls-next" onClick={nextSlide}>
              &gt;
            </button>
          </>
        )}

        <div className="gallery-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
