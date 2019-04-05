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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Create Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        searchText: '',
        filter: 'all' // active, all, done
    };

    searchChange = (searchText) => {
        this.setState({ searchText })
    };

    filterChange = (filter) => {
            this.setState({ filter })
    };


    search(items, term) {
        if (term === '') return items;
        return items.filter((item) => {
           return item.label
               .toLowerCase()
               .indexOf(term.toLowerCase()) > -1
        });
    };

    statusFilter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'done':
                return items.filter((el) => el.done);
            case 'active':
                return items.filter((el) => !el.done);
            default:
                return items;
        }
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

    addItem = (text) => {
        // console.log('Add New Item', text);
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
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
    
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        // console.log(id, oldItem);
        // create new Item obj based on existing with updated property to preserve state
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        // new array with new Item (not use existing array to preserve state mutation!)
        const newArray = [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

        return newArray;
    };
    
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    render() {
        const { todoData, searchText, filter } = this.state;
        const visibleItems = this.statusFilter(
            this.search(todoData, searchText), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <article className="container todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <section className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.searchChange} />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.filterChange}/>
                </section>
                <TodoList
                    todos={visibleItems}
                    onDelete={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                <AddItem
                    onAddItem={ this.addItem } />
            </article>
        );
    };
};