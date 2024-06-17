import { POPULAR_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  useEffect(() => {
    popularMovies && getPopularMovies();
  }, []);

  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
