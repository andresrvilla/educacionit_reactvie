import { LOADNEWS } from "./types"

export const loadNews = () => function (dispatch) {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(datos => dispatch({
            type: LOADNEWS,
            news: datos
        }
        ))
}
