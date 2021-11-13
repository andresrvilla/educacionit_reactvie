import { useReducer } from "react"
import reducer from "./ContadorReducer.reducer"

export default function ContadorReducer() {

    const [count, dispatch] = useReducer(reducer, { count: 0 })

    return <div>
        <p>Hiciste click {count.count} veces</p>
        <button onClick={() => dispatch({ type: "INCREMENTAR" })}>Incrementar</button>
    </div>
}