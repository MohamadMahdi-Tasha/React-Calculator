// Codes By Mahdi Tasha
import React, {Component} from 'react';
import TopSideComponent from "./top-side";
import BottomSideComponent from "./bottom-side";

class Calculator extends Component {
    render() {
        return (
            <div className={'calculator'}>
                <TopSideComponent />
                <BottomSideComponent />
            </div>
        );
    }
}

export default Calculator;