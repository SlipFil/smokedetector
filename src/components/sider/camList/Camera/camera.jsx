import React from "react";
import s from "./camera.module.css";

const Camera = props => {
  console.log(props.cam);
  return (
    <div className={s.camlist}>
      <div>
        {props.pos1}.{props.firstNum}.{props.secondNum}
      </div>
      <div>{props.position}</div>
    </div>
  );
};

export default Camera;
