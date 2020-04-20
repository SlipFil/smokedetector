
import Sider from "./sider";
import { connect } from "react-redux";


 

let mapStateToProps = (state) => { // Данные из стейта
  return {
    camers: state.appSider.camers,
    }
}

let mapDispatchToProps = (dispatch) => { // Коллбэки
  return {
    
  }
}

const SiderContainer = connect(mapStateToProps, mapDispatchToProps)(Sider)
export default SiderContainer;
