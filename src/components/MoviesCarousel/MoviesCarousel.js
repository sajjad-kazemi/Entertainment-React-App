import CarouselCard from "../CarouselCard/CarouselCard";
import {Movies} from './styledComponents'
import Slider from "react-slick";
import { getAllMovies } from "../../features/movies/MoviesSlice";
import { useSelector } from "react-redux";

function MoviesCarousel() {
  const movies = useSelector(getAllMovies);
  const settings = {
    infinite: true,
    speed: 500,
    autoplay:false,
    autoplaySpeed:2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide:true,
    lazyLoad:true,
    centerMode:true,
    className:'center',
    responsive:[
      {
        breakpoint:1580,
        settings:{
          slidesToShow:4,
        }
      },
      {
        breakpoint:1234,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint:925,
        settings:{
          slidesToShow:1,
          centerMode:true
        }
      },
    ]
  };
  console.log(movies);
  if (Object.keys(movies).length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <Movies>
      <Slider {...settings}>
        {movies.Search.map((movie, index) => {
          return <CarouselCard key={index} width={"300px"} movie={movie} />;
        })}
      </Slider>
    </Movies>
  );
}

export default MoviesCarousel;
