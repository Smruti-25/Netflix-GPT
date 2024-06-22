import { NOW_PLAYING_URL, TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;