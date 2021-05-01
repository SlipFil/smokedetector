import React, { useContext} from "react";
import CamContext from "../../../context/camContext";
import Camera from "./Camera/camera";


function CamList() {
  const { cams,  } = useContext(CamContext);
  


  return (
    <div className="camList" style={{ overflowY: "scroll", height: "50%" }}>
      {cams.map((cam ) => {
        if(!cam.onboard){
          return(
            <Camera key={cam.id} camitem={cam}/>
         )}})}
    </div>
  );
}

export default CamList;
