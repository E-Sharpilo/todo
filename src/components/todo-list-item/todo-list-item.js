import React from 'react';
import "./todo-list-item.css";



const TodoListItem = ({ label, important = false }) => {
    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label">{label}</span>
            <span>
                <button className="btn btn-outline-danger btn-sm"><i className="bi bi-trash"></i></button>
                <button className="btn btn-outline-success btn-sm"><i className="bi bi-exclamation"></i></button>
            </span>
        </span>


    );
}

export default TodoListItem;