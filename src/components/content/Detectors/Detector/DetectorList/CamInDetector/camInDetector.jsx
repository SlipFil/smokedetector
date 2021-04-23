import React, {useState, useContext} from "react";
import CamContext from "../../../../../../context/camContext"
import s from "./camInDetector.module.css";
import { VideoCameraOutlined, PlayCircleOutlined } from "@ant-design/icons";

const CamInDetector = (prop) => {
  const { cams, setCams } = useContext(CamContext);
  const [currentCam, setCurrentCam] = useState(null);

  function DragOverHandler(e) {
    e.preventDefault();
    console.log(e.target.parentNode)
    if (e.target.parentNode.classList.contains("camonboard")) {
      e.target.parentNode.style.backgroundColor = "#ff4565";
      
    }
  }

  function DragStartHandler(e, cam) {
    setCurrentCam(cam);
  }
  function DragLeaveHandler(e) {
    e.target.parentNode.style.backgroundColor = "white";
  }
  function DragEndHandler(e) {
    e.target.parentNode.style.backgroundColor = "white";
  }
  function DropHandler(e, cam, cams) {
    e.preventDefault();
    e.target.parentNode.style.backgroundColor = "white"
    // const currentIndex = cams.indexOf(currentCam);
    // cams.splice(currentIndex, 1);
    // const dropIndex = cams.indexOf(cam);
    // cams.splice(dropIndex + 1, 0, currentCam);
    // setCams(
    //   cams.map((c) => {
    //     if (c.id === cam.id) {
    //       return cam;
    //     }
    //     if (c.id === currentCam.id) {
    //       return currentCam;
    //     }
    //     return c;
    //   })
    // );
  }

  return (
    <div draggable={true} key={prop.prop.id} className={`${s.camera} camonboard`}
    
          onDragOver={(e) => DragOverHandler(e)}
          onDragLeave={(e) => DragLeaveHandler(e)}
          onDragStart={(e) => DragStartHandler(e, prop.prop)}
          onDragEnd={(e) => DragEndHandler(e)}
          onDrop={(e) => DropHandler(e, prop.prop, cams)}>
      <div>
        <VideoCameraOutlined />
      </div>
      <div>{prop.prop.globalPosition}</div>
      <div>{prop.prop.firstNum}</div>
      <div>{prop.prop.secondNum}</div>
      <div>{prop.prop.position}</div>
      <div>
        <PlayCircleOutlined />
      </div>
    </div>
  );
};

export default CamInDetector;
