import { useContext } from 'react';
import { AppContext } from '../personaprovider/personaprovider.component';
import { IdiomaContext } from '../idiomaprovider/idiomaprovider.component';

export default function Registracion() {

    const [state, setState] = useContext(AppContext)
    const [statelang, setStatelang] = useContext(IdiomaContext);

    return <>
        {statelang.lang === 'es' ? "Nombres" : "Name"}<br />
        <input type="text" onChange={(e) => setState({ ...state, nombre: e.target.value })} /><br />
        {statelang.lang === 'es' ? "Apellido" : "Surname"}<br />
        <input type="text" onChange={(e) => setState({ ...state, apellido: e.target.value })} /><br />
    </>
}
