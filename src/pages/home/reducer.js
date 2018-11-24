import { GET_HOME_DATA } from "./actionTypes";

const defaultState = {
    homeData:null
}

export default ( state = defaultState , action )=>{
    if(action.type === GET_HOME_DATA){
        return{
            ...state,
            homeData:{...state.homeData,...action.homeData}
        }
    }
    return state
}