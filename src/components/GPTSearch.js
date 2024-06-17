import { BACKGROUD_IMAGE } from '../utils/constants';
import GPTSearchBar from './GPTSearchBar';
import GPTSearchResults from './GPTSearchResults';

const GPTSearch = () => {
return (
  <div>
    <div className="fixed -z-10">
      <img src={BACKGROUD_IMAGE} alt="Background" />
    </div>
    <GPTSearchBar />
    <GPTSearchResults />
  </div>
);
}

export default GPTSearch;