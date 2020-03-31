import React from "react";
import s from "./camlist.module.css";
import Camera from "./Camera/camera";



const CamList = (props) => {
  let camera = props.cams.map (c => <Camera pos1={c.globalPosition} 
                                           firstNum={c.firstNum} 
                                           secondNum={c.secondNum}
                                           position={c.position} />);
  return (
    <div className={s.camlist}>
     {camera}
     
    </div>
  );
};


export default CamList;
