import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import camers from "./camers";
import { Provider } from "react-redux";
import store from './redux/redux-store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App appCams={camers} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


