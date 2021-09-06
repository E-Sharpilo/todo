import React, { Component } from 'react';
import './add-item-panel.css'


export default class AddItemPanel extends Component {
    render() {
        return (
            <div className="add-item-inner" >
                <input className="search-input form-control" placeholder="add todos" />
                <button onClick={() => this.props.onItemAdded('Hello')} className="btn btn-outline-success btn-sm">Add</button>
            </div>
        )
    }

}
