export function Reducer1(state={
    user:{}
},
action){
    switch(action.type){
        case "STORE_SAMPLE" :{
            state={...state}
            state.user = action.payload;
            return state
        }
        case "GET_SAMPLE" :{
            state={...state}
            return state
        }
        default : return state
    }
    
}