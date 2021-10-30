import { useContext } from 'react';
import { IdiomaContext } from '../idiomaprovider/idiomaprovider.component';

export default function SelectorIdioma() {

    const [state, setState] = useContext(IdiomaContext);

    return <>
        <button onClick={() => setState({ lang: 'es' })} >Español</button> -
        <button onClick={() => setState({ lang: 'en' })}>English</button>
    </>
}