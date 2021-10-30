import { useContext } from 'react';
import { IdiomaContext } from '../idiomaprovider/idiomaprovider.component';

export default function MostrarIdioma() {
    const [state, setState] = useContext(IdiomaContext);

    return `${state.lang == "es" ? "Idioma" : "Language"}: ${state.lang}`;
}