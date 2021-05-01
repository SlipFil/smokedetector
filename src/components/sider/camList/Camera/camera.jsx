import React from "react";
import s from "./camera.module.css";

const Camera = (prop) => {
  
  return (
    <div
    className={s.camera}
    key={prop.camitem.id}
     
    >
      <div className={s.title}>
        {prop.camitem.globalPosition}.{prop.camitem.firstNum}.{prop.camitem.secondNum}
      </div>
      <div>{prop.camitem.position}</div>
    </div>
  );
};

export default Camera;
