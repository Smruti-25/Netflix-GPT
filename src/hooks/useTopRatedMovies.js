import { TOP_RATED_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    console.log("Top Rated", json);
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
