import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
    return (
        <div className={style.pos}>
          <div className="container d-flex justify-content-between align-items-center">
            <p><i className="fa fa-copyright" aria-hidden="true"></i> copyright goes to 2019</p>
            <ul className='list-unstyled d-flex'>
                <li className='px-2'><a href="www.google.com"><i className="fab fa-facebook"></i></a></li>
                <li className='px-2'><a href="www.face.com"><i className="fab fa-twitter"></i></a></li>
                <li className='px-2'><a href="www.google.com"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
    )
}