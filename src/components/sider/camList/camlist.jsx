import React, { useContext, useState } from "react";
import CamContext from "../../../context/camContext";

function CamList() {
  // const cams = [
  //   {
  //     id: "1",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "19",
  //     position: "Мелешковичи",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "2",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "20",
  //     position: "НПЗ",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "3",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "21",
  //     position: "Слобода",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "4",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "22",
  //     position: "Трабы",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "5",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "23",
  //     position: "Климовка",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "6",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "24",
  //     position: "Милоград",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "7",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "25",
  //     position: "Леваши",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "8",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "26",
  //     position: "Волклвыск 1",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "9",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "27",
  //     position: "Волклвыск 2",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "10",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "28",
  //     position: "Сосновец",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "11",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "29",
  //     position: "Копаткевичи",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "12",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "30",
  //     position: "Яновка",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "13",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "31",
  //     position: "Казаковка",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "14",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "32",
  //     position: "Дисна",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "15",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "34",
  //     position: "Старина",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  //   {
  //     id: "16",
  //     globalPosition: "BY",
  //     firstNum: "03",
  //     secondNum: "35",
  //     position: "Гадиловичи",
  //     server: "Redist Server 1",
  //     detector: "Detector 1",
  //   },
  // ];
  const { cams, setCams } = useContext(CamContext);
  const [currentCam, setCurrentCam] = useState(null);
  function DragOverHandler(e) {
    e.preventDefault();

    if (e.target.classList.contains("camitem")) {
      e.target.style.backgroundColor = "#ff4565";
    }
  }

  function DragStartHandler(e, cam) {
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

    setCams(cams.map(c=>{
      if(c.id === cam.id){
        return cam
      } if (c.id === currentCam.id){
        return currentCam
      } return c
    }));
  }
  // const sortCams = (a,b)=>{
  //   if(a.oreder> b.order){
  //     return 1
  //   } else {
  //     return -1
  //   } return 0

  // }

  return (
    <div className="camList" style={{ overflowY: "scroll", height: "50%" }}>
      {cams.map((cam) => (
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
      ))}
    </div>
  );
}

export default CamList;
