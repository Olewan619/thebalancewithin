import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";

import photo1 from "../../img/photo-1.jpg";
import photo2 from "../../img/photo-2.jpg";
import photo3 from "../../img/photo-3.jpg";

/**
 * Новый порядок:
 *  - photo2 станет первой (и сохраняет свой особый формат)
 *  - photo3 станет второй
 *  - photo1 станет третьей
 * Помечаем, какая картинка должна иметь «второй» (узкий/высокий) формат.
 */
const images = [
  { src: photo2, special: "second" }, // было №2, теперь №1 — сохраняем формат
  { src: photo3, special: null },
  { src: photo1, special: null }, // было №1, теперь №3
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const dx = touchStartX.current - touchEndX.current;
    if (dx > 50) nextSlide();
    else if (dx < -50) prevSlide();
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
        {images.map((img, index) => {
          let cls = "gallery-item";
          if (index === currentIndex) cls += " gallery-item-active";
          else if (index === (currentIndex - 1 + images.length) % images.length)
            cls += " gallery-item-prev";
          else if (index === (currentIndex + 1) % images.length)
            cls += " gallery-item-next";

          if (img.special === "second") cls += " gallery-item-second";

          return (
            <div key={index} className={cls}>
              <img src={img.src} alt={`Slide ${index + 1}`} />
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
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
