

import {
    addRsCreator
  } from "../../redux/headerReducer.js";
import newSystemForm from "./newSystemForm";
import { connect } from "react-redux";


 

let mapStateToProps = (state) => { // Данные из стейта
  return {
    
    }
}

let mapDispatchToProps = (dispatch) => { // Коллбэки
  return {
    
  }
}

const newSystemFormContainer = connect(mapStateToProps, mapDispatchToProps)(newSystemForm)
export default newSystemFormContainer;
