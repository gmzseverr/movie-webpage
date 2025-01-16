import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Swiperrrr from "./Swiperrrr";

function Banner() {
  return (
    <div className="banner">
      <div className="content active">
        <img
          src="/the-little-mermaid-title.png"
          alt=""
          className="movie-title"
        />
        <h4>
          <span>2023</span>
          <span>
            <i>12+</i>
          </span>
          <span>2h 14min</span>
          <span>Romance</span>
        </h4>
        <p>
          The youngest of King Triton's daughters, Ariel is a beautiful and
          spirited young mermaid with a thirst for adventure. Longing to find
          out more about the world beyond the sea, Ariel visits the surface and
          falls for the dashing Prince Eric. Following her heart, she makes a
          deal with the evil sea witch, Ursula, to experience life on land.
        </p>
        <button className="button">
          <a href="#">
            <i>
              {" "}
              <FontAwesomeIcon icon={faPlay} />
            </i>
            Watch
          </a>
        </button>
        <button className="button">
          <a href="#">
            <i>
              {" "}
              <FontAwesomeIcon icon={faPlus} />
            </i>
            My List
          </a>
        </button>
      </div>
      <Swiperrrr />
    </div>
  );
}

export default Banner;
