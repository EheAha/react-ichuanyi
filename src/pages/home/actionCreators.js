import { GET_HOME_DATA } from "./actionTypes";

export const getHomeResourceSync = (homeData)=>{
    return {
        type:GET_HOME_DATA,
        homeData
    }
}

export const getHomeResourceAsync = (dispatch)=>{
    return ()=>{
        fetch('/m.php?method=index.getHomeData')
            .then(response => response.json())
            .then( result => {
                // console.log(result.data)
                dispatch(getHomeResourceSync(result.data))
            })
    }
}