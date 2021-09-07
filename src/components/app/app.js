import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import AddItemPanel from '../add-item-panel/';
import ItemStatusFilter from '../item-status-filter';

import './app.css';





export default class App extends Component {
    maxId = 0;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Relax'),
        ]
    };
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        });
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem]
            return {
                todoData: newArray
            }
        })
    }

    toggleProperty = (arr, id, properName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [properName]: !oldItem[properName] };
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.length - doneCount
        return (
            <div className="app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todoData={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <AddItemPanel onItemAdded={this.addItem} />
            </div>
        );
    }
};