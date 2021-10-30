import {createStore, applyMiddleware} from 'redux'
import counterReducer from './reducer'

import createSagaMiddleware from '@redux-saga/core'
//import holaMundo from './sagas/holaMundo'
//import esperaIncrementa from './sagas/esperarIncrementa'
import todos from './sagas/todos';

const sagaMiddleware = createSagaMiddleware();

export default createStore(counterReducer, {
    count: 0,
    noticias: []
},applyMiddleware(sagaMiddleware))

sagaMiddleware.run(todos);