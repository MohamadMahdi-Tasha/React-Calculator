// Codes By Mahdi Tasha
import React from "react";

function BottomNumberButtons(props) {
    return (
        <button data-value={props.value} className={'calculator__number-btn'}>{props.value}</button>
    )
}

export default BottomNumberButtons;