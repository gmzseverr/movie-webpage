import React, { useState } from "react";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieCarousel from "./MovieCarousel";

const movies = [
  {
    id: 1,
    title: "/the-little-mermaid-title.png",
    year: 2023,
    ageLimit: "12+",
    duration: "2h 14min",
    genre: "Romance",
    summary:
      "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.",
    image: "/movies/the-little-mermaid.jpeg",
    background: "/movies/bg-little-mermaid.jpg",
  },
  {
    id: 2,
    title: "/the-black-demon-title.png",
    year: 2023,
    ageLimit: "15+",
    duration: "1h 40min",
    genre: "Horror",
    summary:
      "A family accidentally unleashes a deadly creature from an abandoned water tank while vacationing.",
    image: "/movies/the-tank.jpeg",
    background: "/movies/bg-the-black-demon.jpeg",
  },
  {
    id: 3,
    title: "/the-covenant-title.png",
    year: 2023,
    ageLimit: "16+",
    duration: "2h 3min",
    genre: "Action",
    summary:
      "A soldier and his interpreter go on a perilous journey to save their lives in the middle of a warzone.",
    image: "/movies/the-black-demon.jpg",
    background: "/movies/bg-the-covenant.jpeg",
  },
  {
    id: 4,
    title: "/the-65-title.png",
    year: 2023,
    ageLimit: "13+",
    duration: "1h 33min",
    genre: "Science Fiction",
    summary:
      "After a catastrophic crash, a pilot discovers he's stranded on Earth 65 million years ago.",
    image: "/movies/65.jpg",
    background: "/movies/bg-65.jpeg",
  },
];

function Banner() {
  const [activeMovie, setActiveMovie] = useState(movies[0]);

  const handleMovieChange = (movie) => {
    setActiveMovie(movie);
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${activeMovie.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="content active">
        <img
          src={activeMovie.title}
          alt={`${activeMovie.year} title`}
          className="movie-title"
        />
        <h4>
          <span>{activeMovie.year}</span>
          <span>
            <i>{activeMovie.ageLimit}</i>
          </span>
          <span>{activeMovie.duration}</span>
          <span>{activeMovie.genre}</span>
        </h4>
        <p>{activeMovie.summary}</p>
        <button className="button">
          <a href="#">
            <FontAwesomeIcon icon={faPlay} />
            Watch
          </a>
        </button>
        <button className="button">
          <a href="#">
            <FontAwesomeIcon icon={faPlus} />
            My List
          </a>
        </button>
      </div>
      <MovieCarousel movies={movies} onMovieChange={handleMovieChange} />
    </div>
  );
}

export default Banner;
