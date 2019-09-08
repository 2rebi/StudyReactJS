import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import NumberBaseBall from '../Baseball/Baseball';
// import RSP from '../RSP/RSP';
// import Lotto from '../Lotto/Lotto';
import GameMatcher from './GameMatcher_hooks';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/game/number-baseball?key=value&name=rebirthlee&now=2019">숫자야구</Link>
                &nbsp;
                <Link to="/game/rock-scissors-paper">가위바위보</Link>
                &nbsp;
                <Link to="/game/lotto-generator">로또</Link>
                &nbsp;
                <Link to="/game/index">게임 매쳐</Link>
            </div>
            <div>
                {/* <Route path="/number-baseball" component={NumberBaseBall} />
                <Route path="/rock-scissors-paper" component={RSP} />
                <Route path="/lotto-generator" component={Lotto} /> */}

                {/* 스위치는 라우트 안에 매치가 된 첫번째 것을 렌더 */}
                {/* <Switch>   */}

                    {/* exact는 정확히 같아야 렌더 */}
                    <Route exact path="/" render={(props) => <GameMatcher {...props}/>} />
                    <Route path="/game/:name" render={(props) => <GameMatcher {...props} />} />
                    {/* <Route path="/game/number-baseball" render={(props) => <GameMatcher {...props}/>} /> */}
                {/* </Switch> */}
                
                {/* render, props */}
                {/* <Route path="/game/:name" render={(props) => <GameMatcher props={props.abc}/>} /> */}
            </div>
        </BrowserRouter>
    );
};

export default Games;