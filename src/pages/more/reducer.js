import { GET_MORE_DATA,GET_MUNE_DATA } from './actionTypes'

const defaultState = {
    moreData:null,
    muneData:null
}

export default (state=defaultState,action)=>{
    if(action.type === GET_MORE_DATA){
        return{
            ...state,
            moreData:{...state.moreData,...action.moreData}
        }
    }
    if(action.type === GET_MUNE_DATA){
        return{
            ...state,
            muneData:{...state.muneData,...action.muneData}
        }
    }
    return state
}