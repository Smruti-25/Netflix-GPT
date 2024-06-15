import { POPULAR_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  useEffect(() => {
    getPopularMovies();
  }, []);

  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    console.log("Popular", json);
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
