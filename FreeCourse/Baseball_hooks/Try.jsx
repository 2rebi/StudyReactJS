import React, { memo } from 'react';

const Try = memo(({ val }) => {
    return (
        <li>
            <div>{val.try}</div>
            <div>{val.result}</div>
        </li>
    );
});

export default Try;