import {combineReducers} from 'redux'

import {reducer as home} from 'pages/home'
import {reducer as more} from 'pages/more'
import {reducer as loc} from 'pages/recommend'

export default combineReducers({
    home,
    more,
    loc
})