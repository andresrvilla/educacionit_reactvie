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

import { DECREMENTAR, INCREMENTAR, SETNEWS } from "./types";

const reducer = (state, accion) => {
    switch (accion.type) {
        case INCREMENTAR:
            return {
                count: state.count + 1,
                noticias: state.noticias
            }
        case DECREMENTAR:
            return {
                count: state.count - 1,
                noticias: state.noticias
            }
        case SETNEWS:
            return {
                noticias: accion.news,
                count: state.count
            }
        default:
            //throw new Error("la accion no esta tabulada");
            return state;
    }
};

export default reducer;