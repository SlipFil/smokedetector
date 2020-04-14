import {createStore, combineReducers} from "redux";
import headerReducer from "./headerReducer";
import siderReducer from "./siderReducer";


let redusers = combineReducers ({
 appHeader: headerReducer,
 appSider: siderReducer
})

let store =  createStore(redusers);

window.store = store;
export default store;
