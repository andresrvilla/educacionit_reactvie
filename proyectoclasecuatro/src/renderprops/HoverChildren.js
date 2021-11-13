import { useState } from "react"

export default function HoverChildren(props) {

    const [hovering, setHovering] = useState(false);

    function onMouseOver() {
        setHovering(true);
    }

    function onMouseLeave() {
        setHovering(false);
    }

    return <>
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {props.children(hovering)}
        </div>
    </>
}