import React, { useEffect } from 'react'
import Header from './Header'
import { NOW_PLAYING_URL, TMDB_API_OPTIONS } from '../utils/constants';

const Explore = () => {
  useEffect(() => {
    getNowPlayingMovies();
  },[]);

  const getNowPlayingMovies = async() => {
    const data = await fetch(NOW_PLAYING_URL, TMDB_API_OPTIONS);
    const nowPlayingMovies = await data.json();
    console.log({nowPlayingMovies});
  }

  return (
    <div>
      <Header />
    </div>
  )
}

export default Explore