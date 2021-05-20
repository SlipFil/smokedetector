import React from "react";

import s from "./camInDetector.module.css";
import { VideoCameraOutlined, PlayCircleOutlined } from "@ant-design/icons";

const CamInDetector = (prop) => {
  return (
    <div key={prop.cam.id} className={`${s.camera} camonboard`}>
      <div>
        <VideoCameraOutlined />
      </div>
      <div>{prop.cam.globalPosition}</div>
      <div>{prop.cam.firstNum}</div>
      <div>{prop.cam.secondNum}</div>
      <div>{prop.cam.position}</div>
      <div>
        <PlayCircleOutlined />
      </div>
    </div>
  );
};

export default CamInDetector;
