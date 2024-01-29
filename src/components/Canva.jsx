import React from 'react';
import Rect from "./Rect";
import "./canva.css"

function Canvas({squares, click}) {
    return (
        <div className="canvas">
            {
                squares.map((square, i) => (
                    <Rect key={i} value={square} onClick ={() =>click(i)}></Rect>
                    )
                )
            }
        </div>
    )
}
    export default Canvas;