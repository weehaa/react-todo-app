import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false
    };

    onLabelClick = () => {
        // console.log(`Got click on ${this.props.label}`);
        this.setState({
            done: !this.state.done
        });
    };

    render() {

        const  { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <div className={ classNames }>
                <button className="btn btn-outline-success float-left" type="button" >
                    <i className="fa fa-exclamation" />
                </button>
                <span
                    className="todo-list-item-label"
                    style= {style}
                    onClick={ this.onLabelClick }>
                    { label }
                </span>
                <button  className="btn btn-danger float-right" type="button" >
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}