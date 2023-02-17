// Codes By Mahdi Tasha
import React, { Component }  from "react";
import BottomNumberButtons from "./bottom-number-buttons";
import BottomOperatorButtons from "./bottom-oprator-buttons";

class BottomSideComponent extends Component {
    constructor(prop) {
        super(prop);

        // this.state = {
        // }
    }

    render() {
        return (
            <div className={'calculator__bottom-side'}>
                <BottomOperatorButtons value={'e'}/>
                <BottomOperatorButtons value={'micro'}/>
                <BottomOperatorButtons value={'sin'} />
                <BottomOperatorButtons value={'deg'} />
                <BottomOperatorButtons value={'Ac'} />
                <BottomOperatorButtons value={'delete'} />
                <BottomOperatorButtons value={'/'} />
                <BottomOperatorButtons value={'*'} />
                <BottomNumberButtons value={'7'} />
                <BottomNumberButtons value={'8'} />
                <BottomNumberButtons value={'9'} />
                <BottomOperatorButtons value={'-'} />
                <BottomNumberButtons value={'4'} />
                <BottomNumberButtons value={'5'} />
                <BottomNumberButtons value={'6'} />
                <BottomOperatorButtons value={'+'} />
                <BottomNumberButtons value={'1'} />
                <BottomNumberButtons value={'2'} />
                <BottomNumberButtons value={'3'} />
                <BottomOperatorButtons value={'='} />
                <BottomNumberButtons value={'0'} />
                <BottomNumberButtons value={'.'} />
            </div>
        )
    }
}

export default BottomSideComponent;