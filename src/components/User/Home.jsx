import React from "react";
import { useMoviesApi } from "../util/Movies-HookApi";
import ColDisplay from "../UI/ColDisplay";
import DisplayContent from "../UI/DisplayContent";
import LoadingSpinner from "../UI/LoadingSpinner";
import Error from "../../pages/Error";
import { imgPrefix } from "../../api/http";
export default function Home({tv , movies , person}) {

  return (
    <div className="container">
      <div className="row py-5">
        <ColDisplay
          header1={`Trending Movies To Watch  `}
          paragraph={"trending Movies To watch"}
        />
        {movies.map((movie) => (
          <DisplayContent
            key={movie.title}
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
        {tv.map((tv) => (
          <DisplayContent
            key={tv.title}
            imgPrefix={imgPrefix}
            title={tv.title}
            poster_path={tv.poster_path}
          />
        ))}
      </div>
      <div className="row py-5">
        <ColDisplay header1={`  Most popular Actresses  `} />
        {person.map((person) => (
          <DisplayContent
            key={person.name}
            imgPrefix={imgPrefix}
            title={person.name}
            poster_path={person.profile_path}
          />
        ))}
      </div>
    </div>
  );
}
