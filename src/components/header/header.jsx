import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let onAddRS = () => {
    props.addRS()
  }
  let RSbutton = props.redistServers.map((r) => (
    <NavLink to="/redistserver1" activeClassName={s.active}>
      <Button className={s.button}>{r}</Button>
    </NavLink>
  ));

  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
        Smoke
        <br /> Detector
      </div>
      <div className={s.RSbuttons}>
      {RSbutton}
      </div>
      <div>
        <Button onClick={onAddRS} className={s.addbutton} type="primary">
          Добавить RS
        </Button>

        <MoreOutlined className={s.more} />
      </div>
    </div>
  );
};
export default Header;
