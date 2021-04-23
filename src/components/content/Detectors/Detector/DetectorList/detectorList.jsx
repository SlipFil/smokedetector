import React, { useContext } from "react";
import CamContext from "../../../../../context/camContext";
import CamInDetector from "./CamInDetector/camInDetector";

const DetectorList = () => {
  const { cams, setCams } = useContext(CamContext);
  
  console.log(cams);
  return cams.map((cam) => {
    if (cam.onboard) {
      return <CamInDetector  prop={cam} />;
    } 
  });
};

export default DetectorList;
