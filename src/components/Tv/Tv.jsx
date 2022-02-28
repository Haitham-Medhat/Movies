import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Div, DivHover ,UL} from "../style_Overlay/Style";


export default function Tv() {
    let [tv, setTv] = useState([]);
    let imgPrefix = 'https://image.tmdb.org/t/p/w500';
    async function get(term ,callback){
        let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${term}?api_key=3c3176b172e1333dea35fb82ae9f5cf6&language=en-US`);
         callback(data.results);
    }
    useEffect(() => 
    get('popular',setTv)
    , [])
    function getCategory(category){
       get(category,setTv)
    }
    return (
        <div className="container">
            <nav className='w-50 m-auto text-center align-items-center'>
                <UL>
                    <li className='px-2'><NavLink onClick={()=>getCategory('airing_today')} to='/tv/latest'>Airing Today</NavLink></li>
                    <li className='px-2'><NavLink onClick={()=>getCategory('on_the_air')} to='/tv/trending'>On The Air</NavLink></li>
                    <li className='px-2'><NavLink onClick={()=>getCategory('top_rated')}  to='/tv/top_rated'>Top Rated</NavLink></li>
                    <li className='px-2'><NavLink onClick={()=>getCategory('popular')} to='/tv/popular'>popular</NavLink></li>
                </UL>
            </nav>
            <div className="row">
                {
                    tv.map((tv , index)=>
                    <DivHover key={index} className='col-md-4 text-center my-3'>
                        <div  className="item position-relative overflow-hidden">
                            <img className='w-100' src={imgPrefix + tv.poster_path} alt={tv.title} />
                            <Div className={`position-absolute text-center d-flex flex-column justify-content-center` }>
                                <h4>{tv.name}</h4>
                                <p className="fs-5 fs-6">{tv.overview}</p>
                                <p className="fw-bold">rate:{tv.vote_average}</p>
                                <p className="fw-bold">{tv.release_date}</p>
                            </Div>
                        </div>
                    </DivHover>
                    )}
            </div>
        </div>
    )
}
