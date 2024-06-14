import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pl-12">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"India's Top 10"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Comfort Shows"} movies={movies.nowPlayingMovies} />
      </div>
    )
  );
}

export default SecondaryContainer