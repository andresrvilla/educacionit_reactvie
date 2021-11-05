import { useState } from "react";

export default function Hover(Componente) {

    const [changeStyle, setChangeStyle] = useState(false);

    function mouseOver() {
        setChangeStyle(true);
    }

    function mouseLeave() {
        setChangeStyle(false);
    }

    return <>
        <span
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            style={{ backgroundColor: !changeStyle ? "white" : "#c3c3c3" }} >
            <Componente />
        </span>
    </>
}