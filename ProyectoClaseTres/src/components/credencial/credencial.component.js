import { useContext } from 'react';
import { AppContext } from '../personaprovider/personaprovider.component';
import { IdiomaContext } from '../idiomaprovider/idiomaprovider.component';

export default function Credencial() {

    const [{ nombre, apellido }] = useContext(AppContext);
    const [{ lang }] = useContext(IdiomaContext);

    return <div>
        {lang === "es" ? "CREDENCIAL DE ACCESO" : "Access Card"}<br />
        {lang === "es" ? "Nombre" : "Name"}: {nombre}<br />
        {lang === "es" ? "Apellido" : "Surname"}: {apellido}
    </div>
}