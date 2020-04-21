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
    props.createNewSystem(text)
    props.selestFormStatus();
  };
  
  let formClosed = () => { props.selestFormStatus()}
    
  
  if (props.newSystemFormVisible === true) 
  {return (
    
    <div className={s.newSystemForm} >
      <label>
        Global Position:
        <Input
          onChange={onGPChange}
          placeholder="Enter Global Position"
          value={props.appSider.newGlobalPositionBody}
        />
      </label>
      <label>
        FirstNum:
        <Input
          onChange={onFNChange}
          placeholder="Enter FirstNum"
          value={props.appSider.newFirstNumBody}
        />
      </label>
      <label>
        SecondNum:
        <Input
          onChange={onGSNChange}
          placeholder="Enter SecondNum "
          value={props.appSider.newSecondNumBody}
        />
      </label>
      <label>
        Position:
        <Input
          onChange={onPositionChange}
          placeholder="Enter Position"
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
