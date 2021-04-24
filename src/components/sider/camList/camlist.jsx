import React, { useContext, useState } from "react";
import CamContext from "../../../context/camContext";

function CamList() {
  const { cams, setCams } = useContext(CamContext);
  const [currentCam, setCurrentCam] = useState(null);

  function DragOverHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains("camitem")||e.target.classList.contains("camonboard")) {
      e.target.style.backgroundColor = "#ff4565";
      
    }
  }

  function DragStartHandler(e, cam) { console.log(cam)
    setCurrentCam(cam);
  }
  function DragLeaveHandler(e) {
    e.target.style.backgroundColor = "white";
  }
  function DragEndHandler(e) {
    e.target.style.backgroundColor = "white";
  }
  function DropHandler(e, cam, cams) {
    e.preventDefault();
    e.target.style.backgroundColor = "white";
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

  return (
    <div className="camList" style={{ overflowY: "scroll", height: "50%" }}>
      {cams.map((cam) => {
        if(!cam.onboard){
          return(
            <div
          key={cam.id}
          draggable={true}
          onDragOver={(e) => DragOverHandler(e)}
          onDragLeave={(e) => DragLeaveHandler(e)}
          onDragStart={(e) => DragStartHandler(e, cam)}
          onDragEnd={(e) => DragEndHandler(e)}
          onDrop={(e) => DropHandler(e, cam, cams)}
          className="camitem"
            style={{
            borderBottom: "1px solid gray",
            cursor: "grab",
            boxSizing: "border-box",
                }}
        >
          {cam.globalPosition}.{cam.firstNum}.{cam.secondNum} <br />
          {cam.position}
        </div>
         )}})}
    </div>
  );
}

export default CamList;
