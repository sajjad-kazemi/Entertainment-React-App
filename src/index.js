import App from "./App";
import { IndexStyle } from "./index.style";
import {Provider} from 'react-redux'
import React from "react";
import ReactDOM from "react-dom/client";
import {store} from  './features/store'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <IndexStyle />
      <App />
    </React.StrictMode>
  </Provider>
);
