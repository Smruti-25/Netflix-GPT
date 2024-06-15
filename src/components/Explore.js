import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Explore = () => {
  const showGPTSearchView = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      {showGPTSearchView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Explore