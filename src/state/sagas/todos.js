import { all } from "redux-saga/effects"

import holaMundo from './holaMundo';
import esperaIncrementa from './esperarIncrementa';
import cargarNoticias from "./cargarNoticias";

export default function* todos(){
    yield all([holaMundo(),esperaIncrementa(),cargarNoticias()]);
}