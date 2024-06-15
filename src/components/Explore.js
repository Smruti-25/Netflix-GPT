import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Explore = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Explore