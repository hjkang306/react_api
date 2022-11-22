import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  // unsplash search
  const search = async (query) => {
    // 서치이미지
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=pwTcmZX1BLEZXpcol69V_Z-fxMzCGK8nvL8kQ1iV8Hk&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  // unsplash
  useEffect(() => {
    // 랜덤이미지(컨텐츠)
    fetch(
      "https://api.unsplash.com/photos/random?client_id=pwTcmZX1BLEZXpcol69V_Z-fxMzCGK8nvL8kQ1iV8Hk&count=30"
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));

    // 랜덤이미지(슬라이드)
    fetch(
      "https://api.unsplash.com/photos/random?client_id=pwTcmZX1BLEZXpcol69V_Z-fxMzCGK8nvL8kQ1iV8Hk&count=10"
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((result) => setRandom(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "reference api"]} />
        <UnsplashSlider random={random} />
        <UnsplashBtn onSearch={search} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
