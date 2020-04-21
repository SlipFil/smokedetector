import React from "react";
import s from "./detectors.module.css";
import Detector from './Detector/detector'




const Detectors = () => {
    return (
        <div className={s.detectors}>
            <Detector />
        </div>
    )
}

export default Detectors;