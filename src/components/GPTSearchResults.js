import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GPTSearchResults = () => {
  const {gptMovieResults, gptMovieResultsData} = useSelector((store) => store.gpt);
  if(!gptMovieResults) return null;


  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {gptMovieResults.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={gptMovieResultsData[index]}
        />
      ))}
    </div>
  );
}

export default GPTSearchResults