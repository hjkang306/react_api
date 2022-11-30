import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 클래스형 컴포넌트 / 함수형 컴포넌트 ---> 리액트 훅
// 클래스형 컴포넌트 장점 + 함수형 컴포넌트 장점 ---> 리액트 훅

const Reference = () => {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch("https://hjkang306.github.io/react_api/src/utils/reference01.json")
      .then((response) => response.json())
      .then((result) => setReferences(result.cssRefer))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Reference", "Book"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
