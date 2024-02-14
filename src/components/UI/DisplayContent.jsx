 

export default function DisplayContent({ imgPrefix, poster_path, title }) {
   

  return (
    <div  className="col-md-2">
      <img
        className="w-100"
        src={imgPrefix + poster_path}
        alt={title}
      />
      <h3 className="h5 my-2">{title}</h3>
    </div>
  )
}
