import React from "react";
import "./App.css";

import Content from "./components/content/content";
import Header from "./components/header/header";
import Sider from "./components/sider/sider";

import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Sider cams={props.appCams.camers}  />

        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
