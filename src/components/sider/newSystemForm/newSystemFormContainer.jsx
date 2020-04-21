

import newSystemForm from "./newSystemForm";
import { connect } from "react-redux";
import { apdateNewGPBodyAC, selestFormStatusAC, apdateNewSNBodyAC, apdateNewFNBodyAC, apdateNewPositionBodyAC, createNewSystemAC } from "../../../redux/siderReducer";

 

let mapStateToProps = (state) => { // Данные из стейта
  return {
    camers: state.appSider.camers,
    appSider: state.appSider,
    newSystemFormVisible: state.appSider.newSystemFormVisible,
}}
  

let mapDispatchToProps = (dispatch) => { // Коллбэки
  return {
    apdateNewGPBody: (text) => {
      dispatch(apdateNewGPBodyAC(text))
    },
    apdateNewFNBody: (text) => {
      dispatch(apdateNewFNBodyAC(text))
    },
    apdateNewSNBody: (text) => {
      dispatch(apdateNewSNBodyAC(text))
    },
    apdateNewPositionBody: (text) => {
      dispatch(apdateNewPositionBodyAC(text))
    },
    createNewSystem: () => {
      dispatch(createNewSystemAC())
    },
    selestFormStatus: () => {
      dispatch(selestFormStatusAC())
    },
  }
}

const newSystemFormContainer = connect(mapStateToProps, mapDispatchToProps)(newSystemForm)
export default newSystemFormContainer;
