// Codes By Mahdi Tasha
import React, { Component }  from "react";

class TopSideComponent extends Component{
    constructor(prop) {
        super(prop);

        // this.state = {
        // }
    }

    render() {
        return (
            <div className={'calculator__top-side'}>
                <h6 className={'calculator__operation'}>6000<span>/</span>2<span>+</span>3227<span>*</span>2</h6>
                <h6 className={'calculator__equal'}>=<span>12,454</span></h6>
            </div>
        )
    }
}

export default TopSideComponent;