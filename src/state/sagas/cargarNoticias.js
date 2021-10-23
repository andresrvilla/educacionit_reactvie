import { put, takeEvery, call } from 'redux-saga/effects';
import { LOADNEWS } from '../types';
import axios from 'axios';
import { setNews } from '../actions';


function* carga() {
    console.log("Carga");
    const respuesta = yield call(axios.get, "http://jsonplaceholder.typicode.com/posts");
    yield put(setNews(respuesta.data));
}

export default function* cargarNoticias() {
    yield takeEvery(LOADNEWS, carga)
}