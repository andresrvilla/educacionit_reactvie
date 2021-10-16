/*
    Nuestro estado
    {
        count: 0
    }
    Accion
    {
        type: "incrementar"
    }

    {
        type: "actualizarDatos",
        datos: nuevosDatos
    }
*/

import { DECREMENTAR, INCREMENTAR, LOADNEWS } from "./types";

const reducer = (state, accion) => {
    switch (accion.type) {
        case INCREMENTAR:
            return {
                count: state.count + 1
            }
        case DECREMENTAR:
            return {
                count: state.count - 1
            }
        case LOADNEWS:
            return {
                noticias: accion.news
            }
        default:
            //throw new Error("la accion no esta tabulada");
            return state;
    }
};

export default reducer;