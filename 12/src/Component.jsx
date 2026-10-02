import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default function Component() {
const [log, setLog] = React.useState([]);

  const handlePlus = () => {
    const latest = log.length > 0 ? log[0].value : 0;
    setLog([{ id: uniqueId(), value: latest + 1 }, ...log]);
  };

  const handleMinus = () => {
    const latest = log.length > 0 ? log[0].value : 0;
    setLog([{ id: uniqueId(), value: latest - 1 }, ...log]);
  };

  const handleRemove = (id) => {
    setLog(log.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handlePlus}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleMinus}
        >
          -
        </button>
      </div>

      {log.length > 0 && (
        <div className="list-group">
          {log.map((item) => (
            <button
              key={item.id}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => handleRemove(item.id)}
            >
              {item.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
// END
