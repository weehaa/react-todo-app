import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

    render() {
        const { onAddItem } = this.props;
        return (
            <div className="input-group mb-3 mt-2 add-item">
                <input type="text"
                       className="form-control"
                       placeholder="new item"
                       aria-label="new item"
                       aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                                onClick={() => onAddItem('aaa')}>
                            Add
                        </button>
                    </div>
            </div>
        );
    };
}