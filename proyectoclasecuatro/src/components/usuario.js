export default function Usuario({ nombre, apellido, cargo, mail }) {
    return <>
        Usuario: {nombre} {apellido}<br />
        Cargo: {cargo}<br />
        Mail: {mail}
    </>
}