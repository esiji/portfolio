import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Navbar />, document.getElementById('navbar'))
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Contact />, document.getElementById('contact'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
