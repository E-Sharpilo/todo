import React, { Component } from 'react';
import "./todo-list-item.css";

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    }
    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }
    onMarkImp = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }
    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += " important"
        }
        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                    onClick={this.onLabelClick}>{label}</span>
                <span>
                    <button className="btn btn-outline-danger btn-sm" onClick={onDeleted}><i className="bi bi-trash"></i></button>
                    <button className="btn btn-outline-success btn-sm" onClick={this.onMarkImp}><i className="bi bi-exclamation"></i></button>
                </span>
            </span>


        );
    }
}


