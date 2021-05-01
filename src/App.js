import React, { useState } from "react";
import "./App.css";
import Content from "./components/content/content";
import HeaderContainer from "./components/header/headerContainer";
import SiderContainer from "./components/sider/siderContainer";
import {  BrowserRouter } from "react-router-dom";
import CamContext from './context/camContext'

function App() {
const [cams, setCams]=useState([
  {
    id: "1",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "19",
    position: "Мелешковичи",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "2",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "20",
    position: "НПЗ",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "3",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "21",
    position: "Слобода",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "4",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "22",
    position: "Трабы",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "5",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "23",
    position: "Климовка",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "6",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "24",
    position: "Милоград",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "7",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "25",
    position: "Леваши",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: true
  },
  {
    id: "8",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "26",
    position: "Волклвыск 1",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: true
  },
  {
    id: "9",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "27",
    position: "Волклвыск 2",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: true
  },
  {
    id: "10",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "28",
    position: "Сосновец",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "11",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "29",
    position: "Копаткевичи",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: false
  },
  {
    id: "12",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "30",
    position: "Яновка",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: true
  },
  {
    id: "13",
    globalPosition: "BY",
    firstNum: "03",
    secondNum: "31",
    position: "Казаковка",
    server: "Redist Server 1",
    detector: "Detector 1",
    onboard: true
  },
  
])

  return (
    <BrowserRouter>
    <CamContext.Provider value={{cams, setCams}}>
      <div className="App">
        <HeaderContainer />

        <SiderContainer   />
        
        <Content />
      </div></CamContext.Provider>
    </BrowserRouter>
  );
}

export default App;
