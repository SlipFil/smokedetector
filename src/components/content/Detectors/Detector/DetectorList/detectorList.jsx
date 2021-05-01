import React, { useContext } from "react";
import CamContext from "../../../../../context/camContext";

import CamInDetector from "./CamInDetector/CamInDetector.jsx";

const DetectorList = () => {
  const { cams, } = useContext(CamContext);
return(
   cams.map((cam) => { 
    if (cam.onboard) { return <CamInDetector key={cam.id} cam={cam}/>} 
  }))
};

export default DetectorList;
