import { Card, Info, Poster } from "./styledComponents";

import ImageNotFound from "../../images/ImageNotFound.png";
import {useNavigate} from 'react-router-dom'

function MovieCard({ movie, width }) {
  const  navigate = useNavigate();
  if (!movie) {
    return (
      <Card>
        <p>Not Found</p>
      </Card>
    );
  }
  return (
    <Card
      width={width}
      bgImage={movie.Poster}
      notFoundImage={ImageNotFound}
      notFound={movie.Poster==="N/A"}
      onClick={()=>navigate(`/movie/${movie.imdbID}`)}
    >
      <Info>
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <div dir="rtl">{movie.Type}</div>
      </Info>
      <Poster
        src={(movie.Poster !== "N/A" && movie.Poster) || ImageNotFound}
        alt=""
        notFound={movie.Poster==="N/A"}
      />
    </Card>
  );
}

export default MovieCard;
