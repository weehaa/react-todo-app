import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        // new state doesn't depend on previous
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        // default submit is reloading page!
        e.preventDefault();
        this.props.onAddItem(this.state.label)
    };

    render() {
        return (
            <form className="input-group mb-3 mt-2 add-item"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="new item"
                       aria-label="new item"
                       aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                type="submit"
                                id="button-addon2">
                            Add
                        </button>
                    </div>
            </form>
        );
    };
}