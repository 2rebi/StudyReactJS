const React = require("react");
const { Component } = React;

class Shiritori extends Component {
    state = {
        word: '리버스',
        value: '',
        result: '',
    };

    submit = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length -1] === this.state.value[0]) {
            this.setState({
                result: '딩동댕동',
                word: this.state.value,
                value: '',
            });
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
        }
        this.input.focus();
    };

    input;

    inRef = (c) => {
        this.input = c;
    };

    change = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.submit}>
                    <label id="label" htmlFor="wordInput">글자를 입력하세요.</label>
                    <input id="wordInput" className="wordInput" ref={this.inRef} value={this.state.value} onChange={this.change}/>
                    <button>클릭!</button>
                    <h1>핫 로더</h1>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = Shiritori;