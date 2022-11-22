import React from "react";

const UnsplashImages = ({ images }) => {
  return (
    <li>
      <a href={images.links.download}>
        <img src={images.urls.regular} alt={images.urls.alt_description} />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {images.map((images, index) => (
              <UnsplashImages key={index} images={images} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UnsplashCont;
