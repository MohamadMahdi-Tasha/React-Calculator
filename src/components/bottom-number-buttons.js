// Codes By Mahdi Tasha
import React from "react";

function BottomNumberButtons(props) {

    function handleClick() {
        const calculatorOperationTxt = document.querySelector('.calculator__operation');
        calculatorOperationTxt.append(props.value);
    }

    return (<button onClick={handleClick} data-value={props.value} className={'calculator__number-btn'}>{props.value}</button>)
}

export default BottomNumberButtons;