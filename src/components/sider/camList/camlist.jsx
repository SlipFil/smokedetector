import React from "react";
import s from "./camlist.module.css";
import Camera from "./Camera/camera";

import { FixedSizeList as List } from "react-window";

const CamList = props => {
  const camera = props.cams.map(c => (
    <Camera
      pos1={c.globalPosition}
      firstNum={c.firstNum}
      secondNum={c.secondNum}
      position={c.position}
    />
  ));
  
  // const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

  return (
    <div className={s.camlist}>
      {camera}
      {/* <List height={150} itemCount={1000} itemSize={35} width={300}>
        {Row}
      </List> */}
    </div>
  );
};

export default CamList;
