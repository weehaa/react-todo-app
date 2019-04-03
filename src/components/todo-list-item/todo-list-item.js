import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const  { label, important = false } = this.props;

        const style = {
            color: important ? 'tomato' : 'black'
        };

        return (
            <div className="todo-list-item">
                <button className="btn btn-outline-success float-left" type="button" >
                    <i className="fa fa-exclamation" />
                </button>
                <span style= {style} className="col-10 todo-list-item" >
                { label }
            </span>
                <button  className="btn btn-danger float-right" type="button" >
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}