import React, { Component } from 'react';
import NumberBaseball from '../Baseball/Baseball';
import RSP from '../RSP/RSP';
import Lotto from '../Lotto/Lotto';
// import { withRouter } from 'react-router-dom';

const GameMatcher = ({ history, match, location }) => {
    console.log('GameMatcher_hooks');
    const { name } = match.params;
    const { search } = location
    let queryParams = new URLSearchParams(search.slice(1));
    console.log(queryParams.get('key'));
    console.log(queryParams.get('name'));
    console.log(queryParams.get('now'));
    if (name === 'number-baseball') {
        return <NumberBaseball/>;
    } else if (name === 'rock-scissors-paper') {
        return <RSP/>;
    } else if (name === 'lotto-generator') {
        return <Lotto/>;
    }
    return (
        <div>
            일치하는 게임이 없습니다.
        </div>
    );
}

export default GameMatcher;
// export default withRouter(GameMatcher);
