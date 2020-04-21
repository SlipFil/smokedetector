
import Sider from "./sider";
import { connect } from "react-redux";
import {selestFormStatusAC} from "../../redux/siderReducer"


 

let mapStateToProps = (state) => { 
  return {
    camers: state.appSider.camers,
    appSider: state.appSider,
    newSystemFormVisible: state.appSider.newSystemFormVisible,
    
}}

let mapDispatchToProps = (dispatch) => { 
  return {
    selestFormStatus: () => {
      dispatch(selestFormStatusAC())
    },

  }
}

const SiderContainer = connect(mapStateToProps, mapDispatchToProps)(Sider)
export default SiderContainer;


