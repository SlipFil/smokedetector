import React from "react";
import "./App.css";

import Content from "./components/content/content";
import HeaderContainer from "./components/header/headerContainer";
import SiderContainer from "./components/sider/siderContainer";
import NewSystemFormContainer from "./components/newSystemForm/newSystemFormContainer"
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />

        <SiderContainer   />
        <NewSystemFormContainer />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
// cams={props.appCams.camers}