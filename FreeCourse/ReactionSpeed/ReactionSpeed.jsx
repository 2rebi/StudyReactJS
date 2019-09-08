import React, { Component } from 'react';


class ReactionSpeed extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작해주세요.',
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClick = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요.',
            });

            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭.',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state == 'ready') {
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: '너무 성급하게 클릭하셨군요.',
            });
        } else if (state == 'now') {
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작해주세요.',
                    result: [...prevState.result, this.endTime - this.startTime],
                };
            });
        }
    };

    onReset = () => {
        this.setState({
            result: [],
        });
    }

    renderAverage = () => {
        const { result } = this.state;
        if (result.length === 0) {
            return null;
        } else {
            return (
                <>
                    <div>
                        평균 시간 : {result.reduce((a, b) => a + b) / result.length}ms
                    </div>
                    <button onClick={this.onReset}>리셋</button>
                </>
            );
        }
    };
    render() {
        const { state, message } = this.state;
        return (
            <>
                <div 
                    id="screen"
                    className={state}
                    onClick={this.onClick}>
                        {message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

export default ReactionSpeed;