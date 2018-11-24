import {combineReducers} from 'redux'

import {reducer as home} from 'pages/home'
import {reducer as more} from 'pages/more'

export default combineReducers({
    home,
    more
})