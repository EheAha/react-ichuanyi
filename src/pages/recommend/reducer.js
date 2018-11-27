import {GET_LOCATION_DATA} from './actionTypes'

const defaultState = {
    locationData:null
}

export default (state=defaultState,action)=>{
    if(action.type===GET_LOCATION_DATA){
        return{
            ...state,
            locationData:{...state.locationData,...action.locationData}
        }
    }
    return state
}