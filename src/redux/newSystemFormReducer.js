const UPDATE_NEW_GP_BODY = 'UPDATE_NEW_GP_BODY';
const UPDATE_NEW_FN_BODY = 'UPDATE_NEW_FN_BODY';
const UPDATE_NEW_SN_BODY = 'UPDATE_NEW_SN_BODY';
const UPDATE_NEW_POSITION_BODY = 'UPDATE_NEW_POSITION_BODY';
const CREATE_NEW_SYSTEM = 'UPDATE_NEW_POSITION_BODY';



let initialState = {
    newGlobalPositionBody: '',
    newFirstNumBody: '',
    newSecondNumBody:'',
    newPositionBody:'',

    }

const newSystemFormReducer= (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_GP_BODY:{
         
              return {...state}};
        case UPDATE_NEW_FN_BODY:{
         
              return {...state}};
        case UPDATE_NEW_SN_BODY:{
         
              return {...state}};
        case UPDATE_NEW_POSITION_BODY:{
         
              return {...state}};
        case CREATE_NEW_SYSTEM:{
         
              return {...state}};
             
        default: 
        return state;
    }
   }

export const apdateNewGPBodyAC = () => ({ type: UPDATE_NEW_GP_BODY });
export const apdateNewFNBodyAC = () => ({ type: UPDATE_NEW_FN_BODY });
export const apdateNewSNBodyAC = () => ({ type: UPDATE_NEW_SN_BODY });
export const apdateNewPositionBodyAC = () => ({ type: UPDATE_NEW_POSITION_BODY });
export const createNewSystemAC = () => ({ type: CREATE_NEW_SYSTEM });


export default newSystemFormReducer;