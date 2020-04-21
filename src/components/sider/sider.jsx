import React from "react";
import s from "./sider.module.css";
import AddAndSearch from './addAndSearch/addAndSearch'
import CamList from "./camList/camlist";
import NewSystemFormContainer from "./newSystemForm/newSystemFormContainer";

const Sider = (props) => {
  return (
    <div className={s.sider}>
      <AddAndSearch selestFormStatus ={props.selestFormStatus}  />
      <CamList cams={props.camers} />
      <NewSystemFormContainer  appSider={props.appSider} />
    </div>
  );
};
export default Sider;
