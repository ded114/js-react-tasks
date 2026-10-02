import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default function Modal({ isOpen, children }) {
  return (
    <div
      className={isOpen ? 'modal fade show' : 'modal'}
      style={{ display: isOpen ? 'block' : 'none' }}
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}

Modal.Header = function ModalHeader({ toggle, children }) {
  return (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      onClick={toggle}
    ></button>
  </div>
  )
}

Modal.Body = function ModalBody({ children }) {
  return(
    <div className="modal-body">{children}</div>
  )
}

Modal.Footer = function ModalFooter({ children }) {
  return(  
    <div className="modal-footer">{children}</div>
  )
}		
// END
