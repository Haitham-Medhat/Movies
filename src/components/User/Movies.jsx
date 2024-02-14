 
import { NavLink } from "react-router-dom";
import { Div, DivHover, UL } from "../style_Overlay/Style";
import { imgPrefix } from "../../api/http"; 

export default function Movies({data , getCategory}) {

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
        {data.map((movie, index) => (
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
