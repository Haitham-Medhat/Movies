 
import { NavLink } from "react-router-dom";
import { Div, DivHover, UL } from "../style_Overlay/Style"; 
import {   imgPrefix } from '../../api/http'; 


export default function Tv({data , getCategory}) {


    return (
        <div className="container">
            <nav className='w-50 m-auto text-center align-items-center'>
                <UL>
                    <li className='px-2'><NavLink onClick={() => getCategory('airing_today')} to='/tv/latest'>Airing Today</NavLink></li>
                    <li className='px-2'><NavLink onClick={() => getCategory('on_the_air')} to='/tv/trending'>On The Air</NavLink></li>
                    <li className='px-2'><NavLink onClick={() => getCategory('top_rated')} to='/tv/top_rated'>Top Rated</NavLink></li>
                    <li className='px-2'><NavLink onClick={() => getCategory('popular')} to='/tv/popular'>popular</NavLink></li>
                </UL>
            </nav>
            <div className="row">
                {
                    data.map((tv, index) =>
                        <DivHover key={index} className='col-md-4 text-center my-3'>
                            <div className="item position-relative overflow-hidden">
                                <img className='w-100' src={imgPrefix + tv.poster_path} alt={tv.title} />
                                <Div className={`position-absolute text-center d-flex flex-column justify-content-center`}>
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
