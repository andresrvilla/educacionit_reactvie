import { put, takeEvery } from 'redux-saga/effects';
import { INCREMENT_ASYNC, INCREMENTAR } from '../types';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementarAsync() {
    yield delay(3000);
    yield put({ type: INCREMENTAR })
}

export default function* esperarIncrementa() {
    yield takeEvery(INCREMENT_ASYNC, incrementarAsync);
}