import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1 },
        {label: 'Create Awesome App', important: true, id: 2 },
        {label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <article className="container todo-app">
            <AppHeader />
            <section className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </section>
            <TodoList todos={todoData} />
        </article>
    );
};

export default App;
