import React from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';

import './app.css';





const App = () => {

    const todoData = [
        { label: "Drink Coffe", important: false, id: 1 },
        { label: "Build React App", important: true, id: 2 },
        { label: "Relax", important: false, id: 3 }
    ]

    return (
        <div className="app">
            <AppHeader />
            <SearchPanel />
            <TodoList todoData={todoData} />
        </div>
    );
}

export default App;