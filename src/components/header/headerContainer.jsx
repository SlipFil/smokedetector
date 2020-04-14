

import {
    addRsCreator
  } from "../../redux/headerReducer.js";
import Header from "./header";
import { connect } from "react-redux";


 

let mapStateToProps = (state) => { // Данные из стейта
  return {
    redistServers: state.appHeader.redistServers,
    }
}

let mapDispatchToProps = (dispatch) => { // Коллбэки
  return {
    addRS:  () => {
      dispatch(addRsCreator())
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer;
