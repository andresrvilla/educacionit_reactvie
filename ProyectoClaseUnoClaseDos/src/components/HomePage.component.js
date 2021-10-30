import { DECREMENTAR, INCREMENTAR } from "../state/types"
import { connect } from "react-redux"
import { loadNews, incrementCountAsync, decrementCountAsync } from "../state/actions"


const HomePage = ({ contador, incrementCount, decrementCount, cargarNoticias, noticias, incrementCountAsync, decrementCountAsync }) => {
    return <div>
        <h1>Contador</h1>
        {contador}<br />
        <button onClick={incrementCount}>Incrementar</button><br />
        <button onClick={decrementCount}>Decrementar</button><br />
        <button onClick={incrementCountAsync}>Incrementar Async</button><br />
        <button onClick={decrementCountAsync}>Decrementar Async</button><br />
        <button onClick={cargarNoticias}>Cargar Noticias</button><br />
        <ul>
            {noticias.map(noticia => <li key={noticia.id} >{noticia.title}</li>)}
        </ul>
    </div>
}

const mapStateToProps = state => (
    {
        contador: state.count,
        noticias: state.noticias
    }
)

const mapDispatchToProps = dispatch => ({
    incrementCount: () => dispatch({ type: INCREMENTAR }),
    decrementCount: () => dispatch({ type: DECREMENTAR }),
    cargarNoticias: () => { dispatch(loadNews()) },
    incrementCountAsync: () => dispatch(incrementCountAsync()),
    decrementCountAsync: () => dispatch(decrementCountAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


