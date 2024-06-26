import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
return (
  <div className="w-40 md:w-48 pr-4">
    <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
  </div>
);
}

export default MovieCard;