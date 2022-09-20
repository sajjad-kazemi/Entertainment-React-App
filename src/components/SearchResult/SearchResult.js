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
  clearSearchResult,
} from "../../features/movies/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import MovieCard from "../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useParams, useNavigate } from "react-router";

function SearchResult() {
  const navigate = useNavigate()
  const { s, page } = useParams();
  const dispatch = useDispatch();

  const PageClick = (state) => {
    window.scrollTo(0,0);
    navigate('/search/'+s+'/'+(state.selected+1))
  }
  useEffect(() => {
  document.title = 'Search for '+s;
  }, [s]);
  useEffect(() => {
    dispatch(clearSearchResult())
    dispatch(fetchAsyncSearchResults({ search: s, page }));
  }, [dispatch, s, page]);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [s]);

  const result = useSelector(getAllSearchResults);
  const render =
    (result.Response === "True" &&
      result.Search.map((movie, index) => {
        return <MovieCard key={index} width="auto" movie={movie} />;
      })) ||
    (result.isLoading && <LoadingSkeleton />) || (!result.search && <MoviesError>Error!<h6>{result.Error}</h6></MoviesError>) ;
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
        initialPage={page-1}
        />
      </Pagination>
    </>
  );
}

export default SearchResult;
