import { LOADNEWS, INCREMENT_ASYNC, DECREMENT_ASYNC, SETNEWS } from "./types"

/*export const loadNews = () => function (dispatch) {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(datos => dispatch({
            type: LOADNEWS,
            news: datos
        }
        ))
}*/
export function loadNews() {
    return {
        type: LOADNEWS
    }
}

export function setNews(noticias){
    return {
        type: SETNEWS,
        news: noticias
    }
}

export function incrementCountAsync() {
    return {
        type: INCREMENT_ASYNC
    }
}

export function decrementCountAsync() {
    return {
        type: DECREMENT_ASYNC
    }
}