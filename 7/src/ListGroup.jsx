import React from 'react';

// BEGIN (write your solution here)
export default function ListGroup(props) {
  return (
    <ul className="list-group">
	  {React.Children.map(props.children, child => (
	    <li className="list-group-item">{child}</li>
	  ))}
    </ul>
  )

}
// END
