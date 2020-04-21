import React from "react";
import s from "./detectorList.module.css";

import CamInDetector from "./CamInDetector/camInDetector";




class DetectorList extends React.Component {
    render (){
    return (
        <div >
            
                <div className={s.head_of_table}>
                    <div>Cam State</div>
                    <div>Global Position</div>
                    <div>FirstNum</div>
                    <div>Second Num</div>
                    <div>Position</div>
                </div>
                <div className={s.detectorlist}><CamInDetector />
                <CamInDetector />
                <CamInDetector />
                <CamInDetector />
                <CamInDetector />
                <CamInDetector /></div>
                
            
        </div>
    )}
}

export default DetectorList;