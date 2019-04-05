import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (ev) => {
        const searchText = ev.target.value;
        this.setState({ searchText: searchText });
        this.props.onSearchChange(searchText)
    };

    render() {

        return (
            <input type="text"
                   onChange={this.onSearchChange}
                   className="form-control search-input"
                   placeholder="search text"
                   value={this.state.searchText} />
        )
    }
};
