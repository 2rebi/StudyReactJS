import React, { Component } from 'react';

class Try extends Component {
    render() {
        const { val } = this.props;
        return (
            <li>
                <div>{val.try}</div>
                <div>{val.result}</div>
            </li>
        );
    }
}

export default Try;