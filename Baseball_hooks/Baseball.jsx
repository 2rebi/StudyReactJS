import React, { Component } from 'react';

import Tr from './Try';

function getNumbers() { // Todo 숫자 4개 겹치지 않게 뽑기
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array
};

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    submit = (e) => {
        const { value, tries, answer } = this.state;
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState({
                result: '홈런!!!',
                tries: [...tries, { try: value, result: '홈런!!!'}],
            })
            alert("게임을 다시 시작합니다!");
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                alert("게임을 다시 시작합니다!");
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                    this.setState({
                        tries: [...tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                        value: '',
                    })
                }
            }
        }
    };

    change = (e) => {
        this.setState({ value: e.target.value });
    };
    
    // numbers = [{ dec: 1, word: 'One' },
    // { dec: 2, word: 'Two' },
    // { dec: 3, word: 'Three' },
    // { dec: 4, word: 'Four' },
    // { dec: 5, word: 'Five' },
    // { dec: 6, word: 'Six' }];

    render() {
        const { result, value, tries } = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.submit}>
                    <input maxLength={4} value={value} onChange={this.change}/>
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Tr key={`${i + 1}차 시도`} val={v}/>
                        );
                    })}
                    {/* {[1,2,3,4,5,6].map((v) => {
                        return (
                            <li>{v}</li>
                        );
                    })}  
                    {[[1, '1'], [2, '10'],[3, '11'], [4, '100'], [5, '101'], [6, '110']].map((v) => {
                        return (
                            <li><b>{v[0]}</b> - {v[1]}</li>
                        );
                    })} */}
                    {/* {[{ dec: 1, word: 'One' },
                    { dec: 2, word: 'Two' },
                    { dec: 3, word: 'Three' },
                    { dec: 4, word: 'Four' },
                    { dec: 5, word: 'Five' },
                    { dec: 6, word: 'Six' }
                ].map((v) => {
                        return (
                            <li key={v.dec}><b>{v.dec}</b> - {v.word}</li>
                        );
                    })} */}
                     {/* {this.numbers.map((v, i) => {
                        return (
                            <li key={v.dec}><b>{v.dec}</b> - {v.word} / index : {i}</li>
                        );
                    })} */}
                    
                    
                </ul>
            </>
        );
    }
}

export const hello = 'world'; // import { hello }
export const bye = 'good'; //import { hello, bye }
export default NumberBaseball; // import NumberBaseball

// exports.hello = 'hello';
// module.exports = NumberBaseball;