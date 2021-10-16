import { DECREMENTAR, INCREMENTAR } from "../state/types"
import { connect } from "react-redux"
import { loadNews } from "../state/actions"


const HomePage = ({ contador, incrementCount, decrementCount, cargarNoticias, noticias }) => {
    return <div>
        <h1>Contador</h1>
        {contador}<br />
        <button onClick={incrementCount}>Incrementar</button><br />
        <button onClick={decrementCount}>Decrementar</button><br />
        <button onClick={cargarNoticias}>Cargar Noticias</button><br />
        {noticias}
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
    cargarNoticias: () => { dispatch(loadNews()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


