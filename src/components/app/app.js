import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import AddItemPanel from '../add-item-panel/';

import './app.css';





export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [{ label: "Drink Coffe", important: false, id: 1 },
        { label: "Build React App", important: true, id: 2 },
        { label: "Relax", important: false, id: 3 }]
    };

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
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem]
            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <SearchPanel />
                <TodoList todoData={this.state.todoData} onDeleted={this.deleteItem} />
                <AddItemPanel onItemAdded={this.addItem} />
            </div>
        );
    }
};