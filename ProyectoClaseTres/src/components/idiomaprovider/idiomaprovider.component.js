import { createContext, useState } from "react";

export default ({ children }) => {
    const [state, setState] = useState({ lang: "es" });

    return <IdiomaContext.Provider value={[state, setState]}>
        {children}
    </IdiomaContext.Provider>
}

export const IdiomaContext = createContext();