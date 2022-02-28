import axios from "axios";
import { useEffect, useState } from "react";


export function useMoviesApi (){
    const [tv, setTv] = useState([]);
    const [movies, setMovies] = useState([]);
    const [person, setPerson] = useState([]);

    async function get(type ='trending' ,callback ){
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=3c3176b172e1333dea35fb82ae9f5cf6`);
        callback(data.results.splice(0,10));
    }
    useEffect(() => {
        get('movie' , setMovies);
        get('tv' , setTv);
        get('person' , setPerson);
    }, [])
    return {tv,movies,person};
}


