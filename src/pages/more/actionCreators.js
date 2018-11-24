import {GET_MORE_DATA,GET_MUNE_DATA} from './actionTypes'

export const getMoreResourceSync = (moreData)=>{
    return{
        type:GET_MORE_DATA,
        moreData
    }
}

export const getMoreResourceAsync = (dispatch)=>{
    return ()=>{
        fetch('/m.php?method=Nav.getNavLeftButtons')
        .then(response=>response.json())
        .then(result=>{
            dispatch(getMoreResourceSync(result.data))
        })
    }
}

export const getMuneResourceSync = (muneData)=>{
    return {
        type:GET_MUNE_DATA,
        muneData
    }
}

export const getMuneResourceAsync = (dispatch)=>{
    return ()=>{
        fetch('/m.php?method=goods.getTagCategory')
        .then(response=>response.json())
        .then(result=>{
            dispatch(getMuneResourceSync(result.data.tags))
        })
    }
}