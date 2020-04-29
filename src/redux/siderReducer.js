import { render } from "@testing-library/react";

const UPDATE_NEW_GP_BODY = 'UPDATE_NEW_GP_BODY';
const UPDATE_NEW_FN_BODY = 'UPDATE_NEW_FN_BODY';
const UPDATE_NEW_SN_BODY = 'UPDATE_NEW_SN_BODY';
const UPDATE_NEW_POSITION_BODY = 'UPDATE_NEW_POSITION_BODY';
const CREATE_NEW_SYSTEM = 'CREATE_NEW_SYSTEM';
const SELECT_FORM_STATUS = 'SELECT_FORM_STATUS';

let initialState = {
    camers: [
        {
          id: "1",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "19",
          position: "Мелешковичи",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "2",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "20",
          position: "НПЗ",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "3",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "21",
          position: "Слобода",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "4",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "22",
          position: "Трабы",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "5",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "23",
          position: "Климовка",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "6",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "24",
          position: "Милоград",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "7",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "25",
          position: "Леваши",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "8",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "26",
          position: "Волклвыск 1",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "9",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "27",
          position: "Волклвыск 2",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "10",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "28",
          position: "Сосновец",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "11",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "29",
          position: "Копаткевичи",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "12",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "30",
          position: "Яновка",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "13",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "31",
          position: "Казаковка",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "14",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "32",
          position: "Дисна",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "15",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "34",
          position: "Старина",
          server: "Redist Server 1",
          detector: "Detector 1"
        },
        {
          id: "16",
          globalPosition: "BY",
          firstNum: "03",
          secondNum: "35",
          position: "Гадиловичи",
          server: "Redist Server 1",
          detector: "Detector 1"
        }
      ],
      newGlobalPositionBody: '',
    newFirstNumBody: '',
    newSecondNumBody:'',
    newPositionBody:'',
    newSystemFormVisible: false,
    }

const siderReducer= (state = initialState, action) => {

    switch (action.type) {
      case UPDATE_NEW_GP_BODY:{
         return {...state, newGlobalPositionBody: action.NewGPBody }};

  case UPDATE_NEW_FN_BODY:{
   return {...state, newFirstNumBody: action.NewFNBody }};

  case UPDATE_NEW_SN_BODY:{
   return {...state, newSecondNumBody: action.NewSNBody }};

  case UPDATE_NEW_POSITION_BODY:{
   return {...state, newPositionBody: action.NewPositionBody }};
  case SELECT_FORM_STATUS:{
    if (state.newSystemFormVisible === true) {
   return {...state, newSystemFormVisible: false }} else {
    return {...state, newSystemFormVisible: true }}
   };

  case CREATE_NEW_SYSTEM:{
    let NewGPBody = state.newGlobalPositionBody
    let NewFNBody = state.newFirstNumBody
    let NewSNBody = state.newSecondNumBody
    let NewPositionBody = state.newPositionBody
    let newSystem = {
      id: `${state.camers.length+1}`,
   globalPosition: NewGPBody,
   firstNum: NewFNBody,
   secondNum: NewSNBody,
   position: NewPositionBody,
   server: "Redist Server 1",
   detector: "Detector 1"}
       return {...state,camers:[ ...state.camers, newSystem],newGlobalPositionBody: '',
       newFirstNumBody: '',
       newSecondNumBody:'',
       newPositionBody:'' }};
       
   
  default: 
  return state;
    }
   }


export const selestFormStatusAC = () => ({ type: SELECT_FORM_STATUS });
export const apdateNewGPBodyAC = (NewGPBody) => ({ type: UPDATE_NEW_GP_BODY, NewGPBody });
export const apdateNewFNBodyAC = (NewFNBody) => ({ type: UPDATE_NEW_FN_BODY, NewFNBody });
export const apdateNewSNBodyAC = (NewSNBody) => ({ type: UPDATE_NEW_SN_BODY, NewSNBody });
export const apdateNewPositionBodyAC = (NewPositionBody) => ({ type: UPDATE_NEW_POSITION_BODY, NewPositionBody });
export const createNewSystemAC = (NewGPBody, NewFNBody, NewSNBody, NewPositionBody) => ({ type: CREATE_NEW_SYSTEM, NewGPBody, NewFNBody, NewSNBody, NewPositionBody });

export default siderReducer;









