import { UPCOMING_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    console.log("upcoming movies", json);
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;