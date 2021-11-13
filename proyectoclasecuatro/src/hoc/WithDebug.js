export default function withDebug(Componente) {
    return (props) => {
        return <>
            <h4>Debbuger</h4>
            <p>Props</p>
            <p>{JSON.stringify(props)}</p>
            <Componente {...props} />
        </>
    }

}