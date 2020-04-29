import React from "react";
import s from "./sider.module.css";
import AddAndSearch from './addAndSearch/addAndSearch'
import CamList from "./camList/camlist";
import NewSystemFormContainer from "./newSystemForm/newSystemFormContainer";


class Sider extends React.Component  {
  render(){
  return (
    <div className={s.sider}>
      <AddAndSearch selestFormStatus ={this.props.selestFormStatus}  />
      <CamList cams={this.props.camers} />
      <NewSystemFormContainer  appSider={this.props.appSider} />
    </div>
  );}
};
export default Sider;
