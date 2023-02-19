// Codes By Mahdi Tasha
import React from "react";

function BottomNumberButtons(props) {
    function handleClick() {
        const operationTxt = document.querySelector('.calculator__operation');

        operationTxt.textContent += props.value;
    }

    return <button onClick={handleClick} data-value={props.value} className={'calculator__number-btn'}>{props.value}</button>
}

export default BottomNumberButtons;