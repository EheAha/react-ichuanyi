import {createStore,applyMiddleware} from 'redux'

import reducers from './reducers'
//协助做异步请求
import thunk from 'redux-thunk'

const store = createStore(reducers,applyMiddleware(thunk))

export default store