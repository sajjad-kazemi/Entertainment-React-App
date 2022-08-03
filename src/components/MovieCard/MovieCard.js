import { Card, Info, Poster } from "./styledComponents";

import ImageNotFound from "../../images/ImageNotFound.png";

function MovieCard({ movie, width }) {
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
      target="_blank"
      href={`/movie/${movie.imdbID}`}
      bgImage={movie.Poster}
      notFoundImage={ImageNotFound}
      notFound={movie.Poster==="N/A"}
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
