import React, { useState } from 'react';

import Modal from '../modal';

import './todo-list-item.css';

const TodoListItem = (props) => {

  const {
    label, onDelete,
    onToggleImportant,
    onToggleDone,
    important, done, hidden
  } = props;

  const [deleteRequested, setDeleteRequested] = useState(false);

  let classNames = 'todo-list-item py-.25';
  classNames += done ? ' done' : '';
  classNames += important ? ' important' : '';
  classNames += hidden ? ' hidden' : '';

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
    // need to toggle the deleteRequested if the Modal will be dismissed by clicking outside it
    onDismiss: handleDelete
  }

  return (
    <div className={classNames}>
      {deleteRequested ? <Modal {...modalProps} /> : null}
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
    </div>
  );
};

export default TodoListItem;