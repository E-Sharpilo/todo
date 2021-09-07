import React, { Component } from 'react';
import './add-item-panel.css'


export default class AddItemPanel extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }
    render() {
        return (
            <form className="add-item-inner"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="search-input form-control"
                    placeholder="add todos"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button className="btn btn-outline-secondary ">Add</button>
            </form>
        )
    }

}
