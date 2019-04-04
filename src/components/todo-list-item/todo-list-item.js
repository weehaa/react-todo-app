import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        // console.log(`Got click on ${this.props.label}`);
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            };
        });
    };

    render() {

        const  { label, onDelete } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <div className={ classNames }>
                <button className="btn btn-outline-success float-left"
                        type="button"
                        onClick={ this.onMarkImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <span className="todo-list-item-label"
                      onClick={ this.onLabelClick }>
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