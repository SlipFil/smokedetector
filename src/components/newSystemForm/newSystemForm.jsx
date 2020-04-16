import React from "react";
import { Button } from "antd";
import s from "./newSystemForm.module.css";
import { Input } from 'antd';

const newSystemForm = (props) => {
  

  return (
    <div className={s.newSystemForm}>
      <label>Global Position:<Input placeholder="Basic usage" value='GP'  /></label>
      <label>FirstNum:<Input placeholder="Basic usage" value='FN' /></label>
      <label>SecondNum:<Input placeholder="Basic usage" value='SN' /></label>
      <label>Position:<Input placeholder="Basic usage" value='Pos' /></label>
      <Button className={s.button} type="primary">
        Добавить систему 
      </Button>
    </div>
  );
};
export default newSystemForm;
