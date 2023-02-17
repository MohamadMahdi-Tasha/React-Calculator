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
                <h6 className={'calculator__operation'}></h6>
                <h6 className={'calculator__equal'}></h6>
            </div>
        )
    }
}

export default TopSideComponent;