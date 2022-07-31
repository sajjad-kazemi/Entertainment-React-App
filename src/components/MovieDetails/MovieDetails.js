import {Details, Info, MiniInfo, MiniInfoDetail, Plot, Poster, Ratings, Title} from './styledComponents'
import {fetchAsyncDetails, removeSelected} from '../../features/movies/MoviesSlice'
import {useDispatch, useSelector} from  'react-redux'

import {getAllDetails} from '../../features/movies/MoviesSlice'
import { useEffect } from 'react';
import { useParams } from "react-router-dom"

function MovieDetails() {
  const rateTitles = ['IMDB Rating⭐','IMDB Votes👍','Runtime🎬','Year📅'];
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllDetails)
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID))
    return ()=>{
      dispatch(removeSelected())
    }
  }, [dispatch,imdbID]);
  console.log(data);
  if(Object.keys(data).length === 0){
    return <h1 style={{textAlign:"center",color:'gray',height:'300px'}}>Loading...</h1>
  }else {
    document.title = data.Title
  }
  return (
    <Details>
      <Info>
        <Title>{data.Title}</Title>
        <Ratings>
        <p>{data.Ratings.length>=1 && data.Ratings[0].Source ==='Internet Movie Database' && rateTitles[0]+': '+((data.Ratings)[0]).Value }</p>
        <p>{data.Ratings.length>=2 && data.Ratings[1].Source ==='Rotten Tomatoes' && rateTitles[1]+': '+((data.Ratings)[1]).Value }</p>
        <p>{rateTitles[2]+': '+data.Runtime}min</p>
        <p>{rateTitles[3]+': '+data.Year }</p>
        </Ratings>
        <Plot>{data.Plot}</Plot>
        <MiniInfo>
          <MiniInfoDetail><p>Director</p><p>{data.Director}</p></MiniInfoDetail>
          <MiniInfoDetail><p>Stars</p><p>{data.Actors}</p></MiniInfoDetail>
          <MiniInfoDetail><p>Genres</p><p>{data.Genre}</p></MiniInfoDetail>
          <MiniInfoDetail><p>Languages</p><p>{data.Language}</p></MiniInfoDetail>
          <MiniInfoDetail><p>Awards</p><p>{data.Awards}</p></MiniInfoDetail>
        </MiniInfo>
      </Info>
      <Poster src={data.Poster}/>
    </Details>
  )
}

export default MovieDetails