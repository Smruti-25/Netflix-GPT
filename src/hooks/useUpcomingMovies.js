import { UPCOMING_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

   const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

   useEffect(() => {
     !upcomingMovies && getUpcomingMovies();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
};

export default useUpcomingMovies;