import React from 'react'

export default function DisplayContent(props) {
    const {key , imgPrefix , poster_path , title} = props;
  return (
    <div key={key} className="col-md-2">
    <img
      className="w-100"
      src={imgPrefix + poster_path}
      alt={title}
    />
    <h3 className="h5 my-2">{title}</h3>
  </div>
  )
}
