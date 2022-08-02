import {
  Button,
  LoadingSkeleton,
  MoviesContainer,
  MoviesError,
} from "./styledComponents";
import {
  fetchAsyncSearchResults,
  getAllSearchResults,
} from "../../features/movies/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import MovieCard from "../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router";

function SearchResult() {
  const [page, setPage] = useState(1);
  const { s } = useParams();
  const dispatch = useDispatch();
  const PageClick = (state) => {
    setPage(state.selected+1)
  }
  useEffect(() => {
    dispatch(fetchAsyncSearchResults({ search: s, page }));
  }, [dispatch, s, page]);

  const result = useSelector(getAllSearchResults);
  const render =
    (result.Response === "True" &&
      result.Search.map((movie, index) => {
        return <MovieCard key={index} width="auto" movie={movie} />;
      })) ||
    (Object.keys(result).length === 0 && <LoadingSkeleton />) ||
    (result.Response === "False" && <MoviesError>Error!</MoviesError>);
    console.log(result);
  return (
    <>
      <MoviesContainer>{render}</MoviesContainer>
      {/* <Pagination></Pagination> */}
      <ReactPaginate
      pageCount={Math.ceil((+result.totalResults)/10)}
      previousLabel={<Button>{'< '}previous</Button>}
      nextLabel={<Button>next{' >'}</Button>}
      marginPagesDisplayed={4}
      onPageChange={PageClick}

      />
    </>
  );
}

export default SearchResult;
