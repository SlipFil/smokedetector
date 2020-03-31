import React from "react";
import s from "./content.module.css";
import SearchByServer from './SearchByServer/searchByServer';
import Detectors from './Detectors/detectors'

const Content = () => {
  return (
    <div className={s.content}>
      <SearchByServer />
      <Detectors />
    </div>
  );
};

export default Content;
