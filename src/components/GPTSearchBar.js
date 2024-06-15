import { useSelector } from "react-redux";
import { BACKGROUD_IMAGE } from "../utils/constants";
import language from "../utils/languageConstants";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.language);
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUD_IMAGE} alt="Background" />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={language[selectedLanguage].gptSearchPlaceHolder}
          />
          <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
            {language[selectedLanguage].search}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GPTSearchBar