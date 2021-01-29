import { MovieCard } from "./MovieCard";

function MovieList(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>There is no items</h4>
      )}
    </div>
  );
}

export { MovieList };
