// Codes By Mahdi Tasha
import React, { Component } from "react";

class BottomButtons extends Component {
    constructor(prop) {
        super(prop);

        // this.state = {
        // }
    }

    render() {
        return (
            <button>
                {this.props.value}
            </button>
        )
    }
}

export default BottomButtons;