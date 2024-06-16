import { useSelector } from "react-redux";
import { BACKGROUD_IMAGE, TMDB_API_OPTIONS } from "../utils/constants";
import language from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import Error from "./Error";

const GPTSearchBar = () => {
  const searchText = useRef(null);

  const selectedLanguage = useSelector((store) => store.config.language);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchMovieTMDB = async(movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  }

  const handleGPTSearchClick = async() => {
    console.log(searchText.current.value);

    const query =
      "Act as a movie recommendation system and recommend some movies for the query" +
      searchText.current.value + ". Only give me names of 10 movies, comma seperated like the example result ahead. Example Result: The Godfather, Shawshank Redemption, James Bond, The Dark Knight Rises, Oppenheimer"

      //todo figure out the billing
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: query+ " "+searchText.current.value }],
    //   model: "gpt-3.5-turbo",
    // });

    // if(!gptResults.choices){
    //   return (
    //     <Error />
    //   )
    // }
    // console.log(gptResults.choices?[0]?.message?.content.split(","));
    let gptResults =
      "The Godfather, Shawshank Redemption, James Bond, The Dark Knight Rises, Oppenheimer".split(",");
    console.log({gptResults});

    const promiseArray = gptResults.map((movieName) => searchMovieTMDB(movieName));
    const tmdbData = await Promise.all(promiseArray);
    console.log({tmdbData});
  }

  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUD_IMAGE} alt="Background" />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form
          className="w-1/2 bg-black grid grid-cols-12"
          onSubmit={handleSubmit}
        >
          <input
            ref = {searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={language[selectedLanguage].gptSearchPlaceHolder}
          />
          <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGPTSearchClick}>
            {language[selectedLanguage].search}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GPTSearchBar