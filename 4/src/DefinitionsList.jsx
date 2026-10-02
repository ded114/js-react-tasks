import React from 'react';

// BEGIN (write your solution here)
export default function DefinitionsList({ data }) {
    /*console.log('data[0].dt =', data[0].dt)*/

    if (!data || data.length === 0) {
        return null
    }
    
    else {
        return (
            <dl>
	      <dt>{data[0].dt}</dt>
	      <dd>{data[0].dd}</dd>
	      {data[1] && <dt>{data[1].dt}</dt>}
	      {data[1] && <dd>{data[1].dd}</dd>}
	    </dl>
	)
    }
}
// END
