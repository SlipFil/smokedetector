import React from "react";
import s from "./sider.module.css";
import AddAndSearch from './addAndSearch/addAndSearch'
import CamList from "./camList/camlist";

const Sider = (props) => {
  return (
    <div className={s.sider}>
      <AddAndSearch />
      <CamList cams={props.cams} />
    </div>
  );
};
export default Sider;
