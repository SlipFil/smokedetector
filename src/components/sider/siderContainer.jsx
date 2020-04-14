import {
    addSystemAC
  } from "../../redux/siderReducer";
import Sider from "./sider";
import { connect } from "react-redux";


 

let mapStateToProps = (state) => { // Данные из стейта
  return {
    camers: state.appSider.camers,
    }
}

let mapDispatchToProps = (dispatch) => { // Коллбэки
  return {
    addSystem:  () => {
      dispatch(addSystemAC())
    }
  }
}

const SiderContainer = connect(mapStateToProps, mapDispatchToProps)(Sider)
export default SiderContainer;
