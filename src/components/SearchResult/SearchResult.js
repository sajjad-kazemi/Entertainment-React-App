import {
  NextPage,
  PrevPage,
  fetchAsyncNextPage,
  fetchAsyncPrevPage,
  fetchAsyncSearchResults,
  getAllSearchResults,
} from "../../features/movies/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import MovieListing from '../MovieListing/MovieListing'
import { useParams } from "react-router";

function SearchResult() {
  const [page, setPage] = useState(1);
  const { s } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncSearchResults({ search: s, page }));
    dispatch(fetchAsyncNextPage(page !== 1 && page));
    dispatch(fetchAsyncPrevPage(page > 1 && page));
  }, [dispatch, s, page]);
  const result = useSelector(getAllSearchResults);
  const nextPage = useSelector(NextPage);
  const prevPage = useSelector(PrevPage);
  console.log(result);
  if (Object.keys(result).length === 0 || result.Response === "False") {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  return (
    <>
      {result.Search.map((item, index) => {
        return (
          <div key={index}>
            <h5>{item.Title}</h5>
          </div>
        );
      })}
      {prevPage && page > 1 && (
        <button onClick={() => setPage((state) => state - 1)}>prev</button>
      )}
      {nextPage && (
        <button onClick={() => setPage((state) => state + 1)}>next</button>
      )}
    </>
  );
}

export default SearchResult;
