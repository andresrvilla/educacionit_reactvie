import React, { useState } from "react";

/*class Saludo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: props.nombre,
            apellido: props.apellido
        }
        this.onNombreChange = this.onNombreChange.bind(this);
        this.onApellidoChange = this.onApellidoChange.bind(this);
    }

    onNombreChange(e) {
        this.setState({ nombre: e.target.value });
    }

    onApellidoChange(e) {
        this.setState({ apellido: e.target.value });
    }

    render() {
        return <>
            <label>Nombre</label>:<br />
            <input type="text" value={this.state.nombre} onChange={this.onNombreChange} /><br />
            <label>Apellido</label>:<br />
            <input type="text" value={this.state.apellido} onChange={this.onApellidoChange} />
        </>
    }
}

export default Saludo;*/

export default function Saludo(props) {
    console.log("Renderizo Saludo");
    const [nombre, setNombre] = useState(props.nombre);
    const [apellido, setApellido] = useState(props.apellido);
    const onNombreChange = (e) => setNombre(e.target.value);
    const onApellidoChange = (e) => setApellido(e.target.value);

    return <>
        <label>Nombre</label>:<br />
        <input type="text" value={nombre} onChange={onNombreChange} /><br />
        <label>Apellido</label>:<br />
        <input type="text" value={apellido} onChange={onApellidoChange} />
    </>;
}