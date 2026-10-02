import React from 'react';

// BEGIN (write your solution here)
export default function GetCard(obj) {
    if (!obj.title && !obj.text)
	return null
    
    return (
        <div className="card">
	    <div className="card-body">
	       {obj.title ? <h4 className="card-title">{obj.title}</h4> : /*<h4 className="card-title"> </h4>*/ null}
	       {obj.text ? <p className="card-text">{obj.text}</p> : /*<p className="card-text"> </p>*/ null}
	    </div>
	</div>
    );
}
// END
