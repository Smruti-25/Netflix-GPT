import { BACKGROUD_IMAGE } from '../utils/constants';
import GPTSearchBar from './GPTSearchBar';
import GPTSearchResults from './GPTSearchResults';

const GPTSearch = () => {
return (
  <>
    <div>
      <div className="fixed -z-10">
        <img className = "h-screen object-cover md:w-screen" src={BACKGROUD_IMAGE} alt="Background" />
      </div>
      <div>
        <GPTSearchBar />
        <GPTSearchResults />
      </div>
    </div>
  </>
);
}

export default GPTSearch;