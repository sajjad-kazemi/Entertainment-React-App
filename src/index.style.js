import { createGlobalStyle } from "styled-components";

export const IndexStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  * , *:before , *:after{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    transition: color .2s ease-in-out , background-color .2s ease-in-out;
  }
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
}
`;
