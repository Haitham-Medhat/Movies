import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Div, DivHover ,UL} from "../style_Overlay/Style";

export default function Movies() {
  let [movies, setMovies] = useState([]);
  let imgPrefix = "https://image.tmdb.org/t/p/w500";
  async function get(term, callback) {
    let responce;
    if (term === "trending/movie/day") {
      responce = await axios.get(
        `https://api.themoviedb.org/3/${term}?api_key=3c3176b172e1333dea35fb82ae9f5cf6`
      );
    } else {
      responce = await axios.get(
        `https://api.themoviedb.org/3/movie/${term}?api_key=3c3176b172e1333dea35fb82ae9f5cf6`
      );
    }
    callback(responce.data.results);
    console.log(movies);
  }
  useEffect(() => get("now_playing", setMovies), []);
  function getCategory(category) {
    get(category, setMovies);
  }
  return (
    <div className="container">
      <nav className="text-center align-items-center">
        <UL>
          <li className="px-2">
            <NavLink
              onClick={() => getCategory("now_playing")}
              to="/movies/now_playing"
            >
              Now playing
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              onClick={() => getCategory("trending/movie/day")}
              to="/movies/trending"
            >
              Trending
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              onClick={() => getCategory("top_rated")}
              to="/movies/top_rated"
            >
              Top Rated
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              onClick={() => getCategory("upcoming")}
              to="/movies/upcoming"
            >
              Upcoming
            </NavLink>
          </li>
        </UL>
      </nav>
      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="col-md-4 text-center">
            <DivHover className="item my-3">
              <div className="position-relative overflow-hidden">
                <img
                  className="w-100"
                  src={imgPrefix + movie.poster_path}
                  alt={movie.title}
                />
                <Div
                  className={`position-absolute text-center d-flex flex-column justify-content-center`}
                >
                  <h4>{movie.title}</h4>
                  <p className="fs-5 fs-6">{movie.overview}</p>
                  <p className="fw-bold">rate:{movie.vote_average}</p>
                  <p className="fw-bold">{movie.release_date}</p>
                </Div>
              </div>
            </DivHover>
          </div>
        ))}
      </div>
    </div>
  );
}
