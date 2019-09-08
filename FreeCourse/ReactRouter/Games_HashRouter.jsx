import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import NumberBaseBall from '../Baseball/Baseball';
import RSP from '../RSP/RSP';
import Lotto from '../Lotto/Lotto';

const Games = () => {
    return (
        <HashRouter>
            <div>
                <Link to="/number-baseball">숫자야구</Link>
                &nbsp;
                <Link to="/rock-scissors-paper">가위바위보</Link>
                &nbsp;
                <Link to="/lotto-generator">로또</Link>
            </div>
            <div>
                <Route path="/number-baseball" component={NumberBaseBall} />
                <Route path="/rock-scissors-paper" component={RSP} />
                <Route path="/lotto-generator" component={Lotto} />
            </div>
        </HashRouter>
    );
};

export default Games;