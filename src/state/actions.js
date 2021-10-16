import { LOADNEWS } from "./types"

export const loadNews = () => 
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(data => data.json())
    .then(datos => ({
        type: LOADNEWS,
        news: datos
    }))
