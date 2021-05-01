import React, { useContext,useState } from "react";
import CamContext from "../../../../../context/camContext";

import { VideoCameraOutlined, PlayCircleOutlined } from "@ant-design/icons";
import s from "./CamInDetector/camInDetector.module.css";

const DetectorList = () => {
  const { cams, setCams } = useContext(CamContext);
  const [currentCam, setCurrentCam] = useState(null);

  function DragOverHandler(e) {
    e.preventDefault();
    
    if (e.target.parentNode.classList.contains("camonboard")) {
      e.target.parentNode.style.backgroundColor = "#ff4565";
      
    }
  }

  function DragStartHandler(e, cam) {
    setCurrentCam(cam);
  }
  function DragLeaveHandler(e) {
    e.target.parentNode.style.backgroundColor = "white";
    console.log(e.target)
  }
  function DragEndHandler(e) {
    e.target.parentNode.style.backgroundColor = "white";
    
  }
  function DropHandler(e, cam, cams) {
    e.preventDefault();
    e.target.parentNode.style.backgroundColor = "white"
    const currentIndex = cams.indexOf(currentCam);
    cams.splice(currentIndex, 1);
    const dropIndex = cams.indexOf(cam);
    cams.splice(dropIndex + 1, 0, currentCam);
    
    setCams(
      cams.map((c) => { 
        if (c.id === cam.id) {
          return cam;
        }
        if (c.id === currentCam.id) {
          return currentCam;
        }
        return c;
      })
    );
  }

 
  return cams.map((cam) => {
    if (cam.onboard) {
      return <div draggable={true} key={cam.id} className={`${s.camera} camonboard`}
    
      onDragOver={(e) => DragOverHandler(e)}
      onDragLeave={(e) => DragLeaveHandler(e)}
      onDragStart={(e) => DragStartHandler(e, cam)}
      onDragEnd={(e) => DragEndHandler(e)}
      onDrop={(e) => DropHandler(e, cam, cams)}
      >
  <div>
    <VideoCameraOutlined />
  </div>
  <div>{cam.globalPosition}</div>
  <div>{cam.firstNum}</div>
  <div>{cam.secondNum}</div>
  <div>{cam.position}</div>
  <div>
    <PlayCircleOutlined />
  </div>
</div>;
    } 
  });
};

export default DetectorList;
