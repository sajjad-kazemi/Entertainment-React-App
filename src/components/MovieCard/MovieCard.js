import {Card, Info, Poster} from './styledComponents';

import React from 'react'

function MovieCard({movie}) {
  if(!movie){
    return(<Card><p>Not Found</p></Card>)
  }
  // console.log(movie);
  return (
    <Card onClick={()=>console.log('clicked')} bgImage={movie.Poster} ><Info><p>{movie.Title}</p><p>{movie.Year}</p></Info><Poster src={movie.Poster} alt="" /></Card>
  )
}

export default MovieCard