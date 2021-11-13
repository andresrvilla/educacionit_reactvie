const reducer = (state, accion) => {
    switch (accion.type) {
        case "INCREMENTAR":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENTAR":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default reducer;