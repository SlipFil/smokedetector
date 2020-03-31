import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
                Smoke
        <br /> Detector
      </div>
      <div className={s.RSbuttons}>
      <NavLink to="/redistserver1" activeClassName={s.active}><Button className={s.button}>Redist Server 1</Button></NavLink>
      <NavLink to="/redistserver2" activeClassName={s.active}><Button className={s.button}>Redist Server 2</Button></NavLink>
      <NavLink to="/redistserver3" activeClassName={s.active}><Button className={s.button}>Redist Server 3</Button></NavLink>
        
        
      </div>
      <div>
      <Button className={s.addbutton} type="primary">Добавить RS</Button>
      
        <MoreOutlined className={s.more} />
      </div>
    </div>
  );
};
export default Header;
