import { NOW_PLAYING_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;