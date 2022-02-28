import React from "react";
import { useMoviesApi } from "../Movies-HookApi";
import ColDisplay from "../UI/ColDisplay";
import DisplayContent from "../UI/DisplayContent";
export default function Home() {
  let imgPrefix = "https://image.tmdb.org/t/p/w500";
  let { tv, movies, person } = useMoviesApi();
  
  return (
    <div className="container">
      <div className="row py-5">
        <ColDisplay
          header1={`Trending Movies To Watch  `}
          paragraph={"trending Movies To watch"}
        />
        {movies.map((movie, index) => (
          <DisplayContent
            key={index}
            imgPrefix={imgPrefix}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
      <div className="row py-5">
        <ColDisplay
          header1={` Trending Series To Watch  `}
          paragraph={"trending Series To watch"}
        />
        {tv.map((tv, index) => (
          <DisplayContent
            key={index}
            imgPrefix={imgPrefix}
            title={tv.title}
            poster_path={tv.poster_path}
          />
        ))}
      </div>
      <div className="row py-5">
        <ColDisplay header1={`  Most popular Actresses  `} />
        {person.map((person, index) => (
          <DisplayContent
            key={index}
            imgPrefix={imgPrefix}
            title={person.name}
            poster_path={person.profile_path}
          />
        ))}
      </div>
    </div>
  );
}
