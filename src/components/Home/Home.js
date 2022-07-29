import {Banner, StyledHome} from './styledComponents'
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/MoviesSlice'

import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'

function Home() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchAsyncShows())
    dispatch(fetchAsyncMovies())
  },[dispatch])
  return (
    <StyledHome>
      <Banner></Banner>
      <MovieListing/>
    </StyledHome>
  )
}

export default Home