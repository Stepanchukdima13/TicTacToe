import React from 'react';
import "./rect.css"
function Rect(props) {
    return (
        <button className="rect_wrapper" onClick={props.onClick}>{props.value}</button>
    );
}

export default Rect;