function MovieCard (props) {
    const {
        Title: title, 
        Year: year, 
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="card">
    <div className="card-image">
        {
            poster==="N/A" ? (
            <img src={`https://via.placeholder.com/300x450?text=${title}`}/>
            ) : (
            <img src={poster}/>
            )
        }
      
    </div>
    <div className="card-content deep-purple lighten-3 white-text">
      <span className="card-title white-text">{title}</span>
      <p>{year}<span className="right white-text">{type}</span></p>
    </div>
  </div>
}

export {MovieCard}