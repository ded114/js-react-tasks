import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default function Alert({type, text}) {
    //console.log(type, text)
    return (
        <div className={`alert alert-${type}`} role="alert">{text}</div>
    )
}
// END
