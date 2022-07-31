import { Card, Info, Poster } from "./styledComponents";

function MovieCard({ movie , width}) {
  if (!movie) {
    return (
      <Card>
        <p>Not Found</p>
      </Card>
    );
  }
  return (
    <Card width={width} target="_blank" href={`/movie/${movie.imdbID}`} bgImage={movie.Poster}>
        <Info>
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </Info>
        <Poster src={movie.Poster} alt="" />
    </Card>
  );
}

export default MovieCard;
