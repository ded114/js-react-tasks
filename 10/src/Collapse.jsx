import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default function Collapse({text, opened = true}){
  //console.log(text, opened)
  const [isOpened, setNewState] = React.useState(opened)
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#"
          role="button"
          aria-expanded={isOpened ? "true" : "false"} onClick={() => setNewState(isOpened => !isOpened)}
          >Link with href</a
        >
      </p>
      <div className={isOpened ? "collapse show" : "collapse"}>
        <div className="card card-body">{text}</div>
      </div>
    </div>
  )
}
// END
