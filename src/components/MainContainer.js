import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if(!movies) return;

  //todo change thi sback to hardcoded 0
  const mainMovie = movies[2];
  const {original_title, overview, id} = mainMovie;

  return (
    <div className='pt-[40%] bg-black md:pt-0'>
      <VideoTitle title = {original_title} overview = {overview}/>
      <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer