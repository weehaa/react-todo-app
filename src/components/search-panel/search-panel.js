import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = (ev) => {
        // click on "search-panel-clear" button gives ev.target.value = undefined
        const searchText = ev.target.value || '';
        this.setState({ searchText: searchText });
        this.props.onSearchChange(searchText)
    };

    render() {
        return (
          <div className="search-input-container">
            <input type="text"
                   onChange={this.onSearchChange}
                   className="form-control search-input"
                   placeholder="search text"
                   value={this.state.searchText} />
            <i
              className="search-panel-clear fa fa-times fa-lg"
              onClick={this.onSearchChange} />
        </div>
        )
    }
};
