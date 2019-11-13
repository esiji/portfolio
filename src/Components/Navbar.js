import React from 'react';
import '../Styles/App.css';


class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {isOn: false}
        this.showNavOptions = this.showNavOptions.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    showNavOptions() {
        if(!this.state.isOn){
            document.querySelector(".navbar-container").classList.add("navbar-move")
            this.setState({isOn: true})
        }else if(this.state.isOn) {
            document.querySelector(".navbar-container").classList.remove("navbar-move")
            this.setState({isOn: false})
        }
    }

    handleClick() {
        this.showNavOptions()
    }


    render() {
        return (
            <section>
                <svg onClick={this.handleClick} className="navbar-close navbar-close-anim" width="50" height="50">
                    {this.state.isOn ? <path d="M5 5 L40 40 M40 5 L5 40" /> : <path d="M0 5 L40 5 M0 20 L40 20 M0 35 L40 35" />}>
                </svg>
                <div className="navbar-container">
                    <ul>
                        <li><a className="nav-link" href="#header">Top</a></li>
                        <li><a className="nav-link" href="#about">About</a></li>
                        <li><a className="nav-link" href="#projects">Projects</a></li>
                        <li><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}   

export default Navbar;
