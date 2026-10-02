import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default function TodoBox() {
  const [text, setText] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    setTasks((tasks) => [{ id: uniqueId(), text: text }, ...tasks])
    setText('')
  };

  const handleRemove = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={text}
              required
              className="form-control"
              placeholder="I am going..."
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            add
          </button>
        </form>
      </div>

      {tasks.map((task) => (
        <Item key={task.id} task={task} onRemove={handleRemove} />
      ))}
    </div>
  )
}
// END
