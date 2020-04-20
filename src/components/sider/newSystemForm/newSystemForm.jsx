import React from "react";
import { Button } from "antd";
import s from "./newSystemForm.module.css";
import { Input } from 'antd';

const newSystemForm = (props) => {
  

  return (
    <div className={s.newSystemForm}>
      <label>Global Position:<Input placeholder="Basic usage" value={props.appSider.newGlobalPositionBody}  /></label>
      <label>FirstNum:<Input placeholder="Basic usage" value={props.appSider.newFirstNumBody} /></label>
      <label>SecondNum:<Input placeholder="Basic usage" value={props.appSider.newSecondNumBody} /></label>
      <label>Position:<Input placeholder="Basic usage" value={props.appSider.newPositionBody} /></label>
      <Button  type="primary">
        Добавить систему 
      </Button>
    </div>
  );
};
export default newSystemForm;
