import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pl-4 md:pl-12">
        <div className="mt-0 md:-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    )
  );
}

export default SecondaryContainer