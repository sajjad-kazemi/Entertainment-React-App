import {
  Button,
  LoadingSkeleton,
  MoviesContainer,
  MoviesError,
  Pagination
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
  document.title = 'Search for '+s;
  const dispatch = useDispatch();
  const PageClick = (state) => {
    window.scrollTo(0,0);
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
    (Object.keys(result).length === 2 && <LoadingSkeleton />) ||
    (result.Response === "False" && <MoviesError>Error!</MoviesError>);
    const totalPages = Math.ceil((+result.totalResults)/10);
  return (
    <>
      <MoviesContainer>{render}</MoviesContainer>
      <Pagination>
        <ReactPaginate
        pageCount={totalPages}
        previousLabel={<Button>{'< '}previous</Button>}
        nextLabel={<Button>next{' >'}</Button>}
        marginPagesDisplayed={4}
        onPageChange={PageClick}
        />
      </Pagination>
    </>
  );
}

export default SearchResult;
