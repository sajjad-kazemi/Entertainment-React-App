import {StyledHome, Title} from './styledComponents'
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/MoviesSlice'
import { getAllMovies, getAllShows } from "../../features/movies/MoviesSlice";
import { useDispatch, useSelector } from 'react-redux'

import MoviesCarousel from '../MoviesCarousel/MoviesCarousel'
import {useEffect} from 'react'

function Home() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchAsyncShows())
    dispatch(fetchAsyncMovies())
  },[dispatch])
  const  movies = useSelector(getAllMovies)
  const  shows = useSelector(getAllShows)
  return (
    <StyledHome>
      <Title>Movies</Title>
      <MoviesCarousel content={movies}/>
      <Title>Shows</Title>
      <MoviesCarousel content={shows}/>
    </StyledHome>
  )
}

export default Home
