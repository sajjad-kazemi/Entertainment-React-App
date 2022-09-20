import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { darkTheme, lightTheme } from "./common/theme/Theme";
import { useEffect, useState } from "react";

import { AppStyle } from "./App.style";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import React from "react";
import SearchResult from './components/SearchResult/SearchResult'
import { ThemeProvider } from "styled-components";
import {Container} from  './AppStyledComponents'


function App() {
  const getDark = (JSON.parse(localStorage.getItem("dark")) === null && false)  || JSON.parse(localStorage.getItem('dark'));
  const [darkMode, setDarkMode] = useState(getDark);
  const [theme, setTheme] = useState((darkMode && darkTheme)|| lightTheme);
  useEffect(() => {
    darkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [darkMode,theme]);
  if( JSON.parse(JSON.parse(localStorage.getItem("dark"))=== null)){
    localStorage.setItem('dark',darkMode)
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppStyle />
        <Router>
          <Container>
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Routes>
              <Route>
                <Route path='/search/:s/:page' element={<SearchResult/>}></Route>
                <Route path="/" exact element={<Home />} />
                <Route path="/movie/:imdbID" element={<MovieDetails />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
            <Footer></Footer>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
