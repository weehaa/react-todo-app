import React, { useState } from 'react';

import Modal from '../modal';

import './todo-list-item.css';

const TodoListItem = ({
                        label, onDelete,
                        onToggleImportant,
                        onToggleDone,
                        important, done, hidden
                      }) => {

  const [deleteRequested, setDeleteRequested] = useState(false);

  let classNames = 'todo-list-item py-.25';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  if (hidden) {
    classNames += ' hidden';
  }

  const handleDelete = () => {
    setDeleteRequested(!deleteRequested);
  }

  const modalProps = {
    title: 'Confirm Todo item deletion',
    body: `Are you sure you want to delete ${important ? 'important' : ''} item "${label}"?`,
    footer: (
        <>
          <button className="btn btn-danger" onClick={onDelete}>Delete</button>
          <button className="btn btn-secondary" onClick={handleDelete}>Cancel</button>
        </>
      ),
    onDismiss: handleDelete
  }

  return (
    <div className={classNames}>
      <button className="btn btn-outline-success float-left"
              type="button"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation"/>
      </button>
      <span className="todo-list-item-label"
            onClick={onToggleDone}>
                {label}
            </span>
      <button className="btn btn-danger float-right"
              type="button"
              onClick={handleDelete}
        >
        <i className="fa fa-trash-o"/>
      </button>
      {deleteRequested ? <Modal {...modalProps} /> : null}
    </div>
  );
};

export default TodoListItem;