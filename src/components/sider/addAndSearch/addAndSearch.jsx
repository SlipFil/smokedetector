import React from "react";
import s from "./addAndSearch.module.css";
import { Button } from "antd";
import { Input } from "antd";

const { Search } = Input;

const AddAndSearch = () => {
  return (
    <div className={s.wrapper}>
      <Button className={s.button} type="primary">
        Добавить систему ЛХ
      </Button>
      <Search
        className={s.search}
        placeholder="input search text"
        onSearch={value => console.log(value)}
      />
      <div>https://server.ru/cams</div>
    </div>
  );
};
export default AddAndSearch;
