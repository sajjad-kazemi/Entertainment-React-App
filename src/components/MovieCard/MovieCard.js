import { Card, Info, Poster } from "./styledComponents";

function MovieCard({ movie }) {
  if (!movie) {
    return (
      <Card>
        <p>Not Found</p>
      </Card>
    );
  }
  return (
    <Card target="_blank" href={`/movie/${movie.imdbID}`} bgImage={movie.Poster}>
        <Info>
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          {/* <Link style={{display:'none'}} target="_blank" ref={link} to={'movie/hello'}></Link> */}
        </Info>
        <Poster src={movie.Poster} alt="" />
    </Card>
  );
}

export default MovieCard;
