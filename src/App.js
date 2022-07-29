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
import { ThemeProvider } from "styled-components";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState(darkTheme);
  useEffect(() => {
    darkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [darkMode,theme]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppStyle />
        <Router>
          <div className="container">
            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Routes>
              <Route>
                <Route path="/" exact element={<Home />} />
                <Route path="/movie/:imdbID" element={<MovieDetails />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
            <Footer></Footer>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
