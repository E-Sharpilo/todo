import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';


const TodoList = ({ todoData }) => {
  const elements = todoData.map((item) => {
    const { id, ...itemsProps } = item
    return (
      <li className="list-group-item" key={id}><TodoListItem {...itemsProps} /></li>
    );
  });
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
}

export default TodoList;