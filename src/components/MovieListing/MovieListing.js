import { LoadingSkeleton, MoviesContainer, MoviesError } from './styledComponents'

import MovieCard from '../MovieCard/MovieCard'
import React from 'react'
import {getAllMovies} from '../../features/movies/MoviesSlice'
import {useSelector} from 'react-redux'

function MovieListing() {
  const Movies = useSelector(getAllMovies);
  let renderMovies = '';
  renderMovies = ((Movies.Response ==='True') && (Movies.Search.map((movie,index)=> <MovieCard movie={movie} key={index}/> )) ) || (Movies.Response === 'False' && <MoviesError>Error!</MoviesError>) || (<LoadingSkeleton/>)
  return (
    <MoviesContainer>
      {renderMovies}
    </MoviesContainer>
  )
}

export default MovieListing