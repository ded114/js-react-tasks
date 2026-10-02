import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
//const [isActive, setIsActive] = React.useState(true)

export default function BtnGroup() {
    const [activeButton, setActive] = React.useState(null)
    return(
        <div className="btn-group" role="group">
	    <button type="button" className={activeButton !== "left" ? "btn btn-secondary left" : "btn btn-secondary left active"} 
	    onClick={() => setActive(activeButton => activeButton = "left")}>Left</button>
            
	    <button type="button" className={activeButton !== "right" ? "btn btn-secondary right" : "btn btn-secondary right active"}
	    onClick={() => setActive(activeButton => activeButton = "right")}>Right</button>
	</div>
    )
}
// END
