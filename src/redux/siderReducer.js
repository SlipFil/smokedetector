const ADD_SYSTEM = 'ADD_SYSTEM'

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
      ]
    }

const siderReducer= (state = initialState, action) => {

    switch (action.type) {
        case ADD_SYSTEM:{
        //  let length = state.redistServers.length;
        //  let newRS = "Redis Server " +( length + 1) ;               
              ;
              return {...state,
            //   redistServers: [...state.redistServers, newRS], 
              }};
             
        default: 
        return state;
    }
   }

export const addSystemAC = () => ({ type: ADD_SYSTEM });


export default siderReducer;