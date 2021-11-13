import { useState, useEffect } from "react";
// Ademas del "data" que faltaba en Data.Component, el problema era que estaba importando un useEffect que no era
//import { useEffect } from "react/cjs/react.development";

export default function useFetch(url, defaultValue) {
    const [data, setData] = useState(defaultValue);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => setError(err))
    })

    return { data, error }
}