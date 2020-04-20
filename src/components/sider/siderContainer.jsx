
import Sider from "./sider";
import { connect } from "react-redux";



 

let mapStateToProps = (state) => { 
  return {
    camers: state.appSider.camers,
    appSider: state.appSider,
}}

let mapDispatchToProps = (dispatch) => { 
  return {
   

  }
}

const SiderContainer = connect(mapStateToProps, mapDispatchToProps)(Sider)
export default SiderContainer;


