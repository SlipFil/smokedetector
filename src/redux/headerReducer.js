const ADD_RS = 'ADD_RS'


let initialState = {
    redistServers: [ 'Redis Server 1', 'Redis Server 2', 'Redis Server 3'],
    }

const headerReducer= (state = initialState, action) => {

    switch (action.type) {
        case ADD_RS:{
         let length = state.redistServers.length;
         if (length < 8) {   let newRS = "Redis Server " +( length + 1) ;               
          // if (length > 7) {newRS = null}
              return {...state,
              redistServers: [...state.redistServers, newRS], 
              }} else {return {...state, redistServers: [...state.redistServers] }}
            };
             
        default: 
        return state;
    }
   }

export const addRsCreator = () => ({ type: ADD_RS });


export default headerReducer;