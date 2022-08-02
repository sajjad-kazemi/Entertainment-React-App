import { Card, Poster, Title } from "./styledComponents";

import { Link } from "react-router-dom";

function CarouselCard({ content }) {
  return (
    <Card>
      <Link to={`movie/${content.imdbID}`}>
        <Poster src={content.Poster} alt="" />
        <Title>{content.Title}</Title>
      </Link>
    </Card>
  );
}

export default CarouselCard;
