import { Card, Poster, Title } from "./styledComponents";

import ImageNotFound from '../../images/ImageNotFound.png'
import { Link } from "react-router-dom";

function CarouselCard({ content }) {
  return (
    <Card>
      <Link to={`movie/${content.imdbID}`}>
        <Poster src={(content.Poster!=="N/A"&& content.Poster)|| ImageNotFound} alt="" />
        <Title>{content.Title}</Title>
      </Link>
    </Card>
  );
}

export default CarouselCard;
