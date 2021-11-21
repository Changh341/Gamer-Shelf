import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (

        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img key={`img ${index}`} className="slide-image" src={slide.urls} alt="" />
          <h2 key={`text ${index}`} className="slide-text">{slide.description}</h2>
        </div>

      ))}
    </section>
  );
}

export default SliderContent;
