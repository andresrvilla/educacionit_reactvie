import {createStore, applyMiddleware} from 'redux'
import counterReducer from './reducer'
import thunk from 'redux-thunk'

export default createStore(counterReducer, {
    count: 0,
    noticias: []
},applyMiddleware(thunk))