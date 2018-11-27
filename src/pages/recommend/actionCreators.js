import { GET_LOCATION_DATA } from './actionTypes'

export const getLocationDataSync = (locationData)=>{
    return{
        type:GET_LOCATION_DATA,
        locationData
    }
}

export const getLocationDataAsync = (dispatch)=>{
    return ()=>{
        fetch('/media/m/json/page/tomorrow_recommend/module/address_list/location.json')
        .then(response=>response.json())
        .then(result=>{
            dispatch(getLocationDataSync(result))
        })
    }
}