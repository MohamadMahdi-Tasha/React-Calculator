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
                <p className={'calculator__operation'}></p>
                <p className={'calculator__equal'}></p>
            </div>
        )
    }
}

export default TopSideComponent;