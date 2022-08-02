import CarouselCard from "../CarouselCard/CarouselCard";
import { Loading } from "./styledComponents";
import { Movies } from "./styledComponents";
import Slider from "react-slick";
import settings from "./settings";

function MoviesCarousel({ content }) {
  if (Object.keys(content).length === 0) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <>
      <Movies>
        <Slider {...settings}>
          {content.Search.map((content, index) => {
            return (
              <CarouselCard key={index} width={"300px"} content={content} />
            );
          })}
        </Slider>
      </Movies>
    </>
  );
}

export default MoviesCarousel;
