import { useState } from "react"

export default function HoverRP({ render }) {

    const [hovering, setHovering] = useState(false);

    function onMouseOver() {
        setHovering(true);
    }

    function onMouseLeave() {
        setHovering(false);
    }

    return <>
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {render(hovering)}
        </div>
    </>
}