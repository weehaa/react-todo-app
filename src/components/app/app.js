import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Create Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    addItem = (text) => {
        // console.log('Add New Item', text);
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({ todoData }) => {
                return {
                    todoData: [...todoData, newItem]
                };
        });
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            // we need to create new array because we don't want to change the state!
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        const { todoData } = this.state;

        return (
            <article className="container todo-app">
                <AppHeader />
                <section className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </section>
                <TodoList
                    todos={todoData}
                    onDelete={ this.deleteItem } />
                <AddItem
                    onAddItem={ this.addItem } />
            </article>
        );
    };
};

