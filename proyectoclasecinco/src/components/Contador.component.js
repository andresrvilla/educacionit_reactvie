import React, { useEffect, useState } from "react";

/*class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Hiciste click ${this.state.count} veces`;
    }

    componentDidUpdate(){
        document.title = `Hiciste click ${this.state.count} veces`;
    }

    render() {
        return <div>
            <p>Hiciste click {this.state.count} veces</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Incrementar</button>
        </div>
    }

}
export default Contador;*/

export default function Contador() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Hiciste click ${count} veces`;
    }, [count])

    return <div>
        <p>Hiciste click {count} veces</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
}