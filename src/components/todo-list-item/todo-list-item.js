import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const  { label, onDelete,
                onToggleImportant,
                onToggleDone,
                important, done, hidden } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important'
        }

        if (hidden) {
            classNames += ' hidden'
        }

        return (
            <div className={ classNames }>
                <button className="btn btn-outline-success float-left"
                        type="button"
                        onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <span className="todo-list-item-label"
                      onClick={ onToggleDone }>
                    { label }
                </span>
                <button className="btn btn-danger float-right"
                        type="button"
                        onClick={onDelete}>
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}