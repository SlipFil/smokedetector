import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import s from "./header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
                Smoke
        <br /> Detector
      </div>
      <div className={s.RSbuttons}>
        <Button className={s.button}>Redist Server 1</Button>
        <Button className={s.button}>Redist Server 2</Button>
        <Button className={s.button}>Redist Server 3</Button>
      </div>
      <Button className={s.button} type="primary">Добавить RS</Button>
      <a href="#">
        <MoreOutlined />
      </a>
    </div>
  );
};
export default Header;
