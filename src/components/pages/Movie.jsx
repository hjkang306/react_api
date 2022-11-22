import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=191b7edccc4ad9d9ad42c6a2cce972d7"
    )
      .then((response) => response.json())
      .then((result) => setPopulars(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=191b7edccc4ad9d9ad42c6a2cce972d7&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=191b7edccc4ad9d9ad42c6a2cce972d7&query=mission"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "reference api"]} />
        <MovieList populars={populars} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
