import { LoadingSkeleton, MoviesContainer, MoviesError } from './styledComponents'
import {getAllMovies, getAllShows} from '../../features/movies/MoviesSlice'

import MovieCard from '../MovieCard/MovieCard'
import React from 'react'
import {useSelector} from 'react-redux'

function MovieListing() {
  const Movies = useSelector(getAllMovies);
  const Shows = useSelector(getAllShows);
  let renderMovies = '' , renderShows = ''
  renderMovies = ((Movies.Response ==='True') && (Movies.Search.map((movie,index)=> <MovieCard movie={movie} key={index}/> )) ) || (Movies.Response === 'False' && <MoviesError>Error!</MoviesError>) || (<LoadingSkeleton/>)
  renderShows = ((Shows.Response ==='True') && (Shows.Search.map((show,index)=> <MovieCard movie={show} key={index}/>)))
  return (
    <MoviesContainer>
      {/* {renderMovies} */}
      {renderShows}
    </MoviesContainer>
  )
}

export default MovieListing