import React from "react";
import { Button } from "antd";
import s from "./newSystemForm.module.css";
import { Input  } from "antd";
import {
  CloseOutlined
} from '@ant-design/icons';

const newSystemForm = (props) => {

  let onGPChange = (e) => {
    let text = e.target.value;
    props.apdateNewGPBody(text);
  };

  let onFNChange = (e) => {
    let text = e.target.value;
    props.apdateNewFNBody(text);
  };

  let onGSNChange = (e) => {
    let text = e.target.value;
    props.apdateNewSNBody(text);
  };

  let onPositionChange = (e) => {
    let text = e.target.value;
    props.apdateNewPositionBody(text);
  };

  let addNewSystem = (e) => {
    let text = e.target.value;
    props.createNewSystem(text);
  };
  let formStatus = "block"
  let formClosed = () => {
    
    if (formStatus === 'block') {formStatus = 'none'}else
    {formStatus = 'block'} ;
    debugger
  }
  if (formStatus === 'block') 
  {return (
    
    <div className={s.newSystemForm} style={{display: {formStatus}}}>
      <label>
        Global Position:
        <Input
          onChange={onGPChange}
          placeholder="Basic usage"
          value={props.appSider.newGlobalPositionBody}
        />
      </label>
      <label>
        FirstNum:
        <Input
          onChange={onFNChange}
          placeholder="Basic usage"
          value={props.appSider.newFirstNumBody}
        />
      </label>
      <label>
        SecondNum:
        <Input
          onChange={onGSNChange}
          placeholder="Basic usage"
          value={props.appSider.newSecondNumBody}
        />
      </label>
      <label>
        Position:
        <Input
          onChange={onPositionChange}
          placeholder="Basic usage"
          value={props.appSider.newPositionBody}
        />
      </label>
      <Button onClick={addNewSystem} type="primary">
        Добавить систему
      </Button>
      <CloseOutlined style={{ fontSize: '16px', color: '#fff' }} 
      spin={false} onClick={formClosed} />
    </div>
  );}
  else {
    return (<div></div>)
  }
};
export default newSystemForm;
