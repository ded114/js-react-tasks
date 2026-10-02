import React from 'react';

// BEGIN (write your solution here)
export default function Card({ children }) {
  return (
    <div className="card">{children}</div>
  )
}

Card.Body = function CardBody({ children }) {
  return (
    <div className="card-body">{children}</div>
  )
}

Card.Title = function CardTitle({children}) {
  return (
    <h4 className="card-title">{children}</h4>
  )
}

Card.Text = function CardText({children}) {
  return (
    <p className="card-text">{children}</p>
  )
}
// END
