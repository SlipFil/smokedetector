import React from "react";
import s from "./camInDetector.module.css";
import { VideoCameraOutlined, PlayCircleOutlined } from "@ant-design/icons";

const CamInDetector = () => {
  return (
    <div className={s.camera}>
      <div>
        <VideoCameraOutlined />
      </div>
      <div>By</div>
      <div>01</div>
      <div>01</div>
      <div>Minsk</div>
      <div>
        <PlayCircleOutlined />
      </div>
    </div>
  );
};

export default CamInDetector;
