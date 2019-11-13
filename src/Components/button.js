import React from 'react';
import '../Styles/App.css';

export class Button extends React.Component {
    constructor(props){
        super(props)
        this.changeLocation = this.changeLocation.bind(this)
    }

    changeLocation(e){
        window.location.href = `http://localhost:3000/#${e.target.id.toLowerCase()}`
    }

    render() {
        return (
            <div className="button-container">
                <button id={this.props.value} className="nav-button" onClick={this.changeLocation} onMouseEnter={this.props.event1} onMouseLeave={this.props.event2}>{this.props.value}</button>
            </div>
        )
    }
}