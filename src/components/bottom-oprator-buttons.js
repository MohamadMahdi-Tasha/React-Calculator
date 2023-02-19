// Codes By Mahdi Tasha
import React from "react";

function BottomOpratorButtons(props) {

    function handleDeleteClick() {
        const operationTxt = document.querySelector('.calculator__operation');
        operationTxt.textContent = operationTxt.textContent.slice(0, operationTxt.textContent.length - 1)
    }

    function handleMicroClick() {
        const operationTxt = document.querySelector('.calculator__operation');
        const equalTxt = document.querySelector('.calculator__equal');

        equalTxt.textContent = eval(operationTxt.textContent) * Math.pow(10, -6);
        operationTxt.textContent = '';
    }

    function handleEClick() {
        const operationTxt = document.querySelector('.calculator__operation');
        operationTxt.textContent += 'e';
    }

    function handleSinClick() {
        const operationTxt = document.querySelector('.calculator__operation');
        const equalTxt = document.querySelector('.calculator__equal');

        equalTxt.textContent = Math.sin(eval(operationTxt.textContent));
        operationTxt.textContent = '';
    }

    function handleDegClick() {
        const operationTxt = document.querySelector('.calculator__operation');
        const equalTxt = document.querySelector('.calculator__equal');

        equalTxt.textContent = eval(operationTxt.textContent) * (3.14159265359/180);
        operationTxt.textContent = '';
    }

    function handleAcClick() {
        const operationTxt = document.querySelector('.calculator__operation');
        const equalTxt = document.querySelector('.calculator__equal');

        equalTxt.textContent = '';
        operationTxt.textContent = '';
    }

    if (props.value === 'delete') {
        return <button onClick={handleDeleteClick} data-value={props.value} className={'calculator__oprator-btn'}><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.53499 1.11994e-08H21C21.2652 1.11994e-08 21.5196 0.105357 21.7071 0.292893C21.8946 0.48043 22 0.734784 22 1V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H6.53499C6.3704 18 6.20835 17.9594 6.06321 17.8818C5.91807 17.8042 5.79434 17.6919 5.70299 17.555L0.369993 9.555C0.260354 9.39067 0.201843 9.19755 0.201843 9C0.201843 8.80245 0.260354 8.60933 0.369993 8.445L5.70299 0.445C5.79434 0.308084 5.91807 0.195832 6.06321 0.118205C6.20835 0.0405779 6.3704 -2.46193e-05 6.53499 1.11994e-08ZM7.06999 2L2.40399 9L7.06999 16H20V2H7.06999ZM13 7.586L15.828 4.757L17.243 6.172L14.414 9L17.243 11.828L15.828 13.243L13 10.414L10.172 13.243L8.75699 11.828L11.586 9L8.75699 6.172L10.172 4.757L13 7.586Z" fill="currentColor"/></svg></button>
    } else if (props.value === 'micro') {
        return <button onClick={handleMicroClick} data-value={props.value} className={'calculator__oprator-btn'}><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.689 0.682999V10.601H7.619V8.531C7.367 9.239 6.947 9.785 6.359 10.169C5.783 10.553 5.105 10.745 4.325 10.745C3.929 10.745 3.557 10.673 3.209 10.529C2.861 10.385 2.579 10.151 2.363 9.827V15.317H0.311005V0.682999H2.363V5.849C2.363 6.857 2.603 7.625 3.083 8.153C3.575 8.681 4.229 8.945 5.045 8.945C5.825 8.945 6.44901 8.693 6.91701 8.189C7.385 7.673 7.619 6.923 7.619 5.939V0.682999H9.689Z" fill="currentColor"/></svg></button>
    } else if (props.value === 'e') {
        return <button onClick={handleEClick} data-value={props.value} className={'calculator__oprator-btn'}>{props.value}</button>
    } else if (props.value === 'sin') {
        return <button onClick={handleSinClick} data-value={props.value} className={'calculator__oprator-btn'}>{props.value}</button>
    } else if (props.value === 'deg') {
        return <button onClick={handleDegClick} data-value={props.value} className={'calculator__oprator-btn'}>{props.value}</button>
    } else if (props.value === 'Ac'){
        return <button onClick={handleAcClick} data-value={props.value} className={'calculator__oprator-btn'}>{props.value}</button>
    } else {
        return <button data-value={props.value} className={'calculator__oprator-btn'}>{props.value}</button>
    }
}

export default BottomOpratorButtons;