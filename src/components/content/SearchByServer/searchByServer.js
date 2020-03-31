import React from "react";
import s from "./SearchByServer.module.css";
import { Input } from "antd";
import { Tag } from 'antd';

const { Search } = Input;
function log(e) {
    console.log(e);
  }

const SearchByServer = () => {
  return (
    <div className={s.search}>
      <Search
        className={s.searchwindow}
        placeholder="input search text"
        onSearch={value => console.log(value)}
      />
      <Tag className={s.chip} closable onClose={log}>
      CamName: BY*
    </Tag>
    </div>
  );
};
export default SearchByServer;
