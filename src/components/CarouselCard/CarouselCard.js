import {Card, Poster, Title} from './styledComponents'

import {Link} from 'react-router-dom'

function CarouselCard({movie}) {
  return (
    <Card>
        <Poster src={movie.Poster} alt="" />
      <Link to={`movie/${movie.imdbID}`}>
        <Title>{movie.Title}</Title>
      </Link>
    </Card>
  )
}

export default CarouselCard