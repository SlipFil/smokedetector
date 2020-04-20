import React from "react";
import s from "./sider.module.css";
import AddAndSearch from './addAndSearch/addAndSearch'
import CamList from "./camList/camlist";
import NewSystemFormContainer from "./newSystemForm/newSystemFormContainer";

const Sider = (props) => {
  return (
    <div className={s.sider}>
      <AddAndSearch />
      <CamList cams={props.camers} />
      <NewSystemFormContainer />
    </div>
  );
};
export default Sider;
