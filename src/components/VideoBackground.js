import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const VideoBackground = (movieId) => {
  useEffect(() => {
    getMovieVideos();
  }, []);

  console.log("movieid", movieId)

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/653346/videos`,
      TMDB_API_OPTIONS
    );

    const json = await data.json();
    const filteredData = json.results.filter(video => video.type === "Trailer");
    const trailer = filteredData.length?filteredData[0]:json.results[0];
    console.log({trailer});
  };

  return (
    <div>
      <h1>VideoBackground Component</h1>
    </div>
  );
};

export default VideoBackground;