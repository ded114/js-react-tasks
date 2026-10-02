import React from 'react';

// BEGIN (write your solution here)
export default function Card(obj) {
    return (
	<div className="card">
            <div className="card-body">
	        {obj.title ? <h4 className="card-title">{obj.title}</h4> : <h4 className="card-title">title</h4>}
	        {obj.text ? <p className="card-text">{obj.text}</p> : <p className="card-text">text</p>}
            </div>
        </div>
    );
}
// END
