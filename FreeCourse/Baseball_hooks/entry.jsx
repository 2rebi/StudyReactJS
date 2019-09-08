import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import BB from './Baseball';

const Hot = hot(BB);
ReactDom.render(<Hot />, document.querySelector("#root"));