import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addTrailerVideo} from '../utils/moviesSlice'

const VideoBackground = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useEffect(() => {
    getMovieVideos();
  }, []);

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/653346/videos`,
      TMDB_API_OPTIONS
    );

    const json = await data.json();
    const filteredData = json.results.filter(video => video.type === "Trailer");
    const trailer = filteredData.length?filteredData[0]:json.results[0];
    dispatch(addTrailerVideo(trailer))
  };

  return (
    <div>
      <h1>VideoBackground Component</h1>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;