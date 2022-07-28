import {Banner, StyledHome} from './styledComponents'

import MovieApi from '../../common/api/movieApi'
import MovieListing from '../MovieListing/MovieListing'
import {addMovies} from '../../features/movies/MoviesSlice'
import {apiKey} from '../../common/api/movieApiKey'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'

function Home() {
  const dispatch = useDispatch()
  const movieText = 'iron';
  useEffect(() =>{
    const fetchMovie = async ()=>{
      const resp = await MovieApi.get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
      .catch((e)=>{
        console.log('Error:',e);
      })
      dispatch(addMovies(resp.data))
    }
    fetchMovie()
  },[dispatch])
  return (
    <StyledHome>
      <Banner></Banner>
      <MovieListing/>
    </StyledHome>
  )
}

export default Home