import React, { Component } from 'react';

class Try extends Component {
    render() {
        const { info } = this.props;
        return (
            <li>
                <div>{this.props.val.try}</div>
                <div>{this.props.val.result}</div>
            </li>
        )
    }
}

export default Try;