import React from 'react';
import '../Styles/App.css';
import {Button} from "./button"


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {buttonsId: ['About', 'Projects', 'Contact']}
    this.changeButtonsOnHover = this.changeButtonsOnHover.bind(this)
    this.changeButtonsOnLeave = this.changeButtonsOnLeave.bind(this)
  }

  changeButtonsOnHover(e) {
    let buttons = []

    for(let i=0; i < this.state.buttonsId.length; i++) {
      let button = document.getElementById(`${this.state.buttonsId[i]}`)
      buttons.push(button)
    }

    buttons.forEach(button => {
      if(button.id === e.target.id) {
        button.classList.add("hovered")
      }else {
        button.classList.add("small")
      }
    })
  }

  changeButtonsOnLeave() {
    let buttons = []

    for(let i=0; i < this.state.buttonsId.length; i++) {
      let button = document.getElementById(`${this.state.buttonsId[i]}`)
      buttons.push(button)
    }

    buttons.forEach(button => {
      if(button.classList.contains("hovered")){
        button.classList.remove("hovered")
      }
      if(button.classList.contains("small")) {
        button.classList.remove("small")
      }
    })
  }

  render() {
    return (
      <div>
        <section className="name">
          <h1 className="my-name"><span className="first">Łukasz</span> <span className="last">Gabriel</span></h1>
          <span className="header-add">Aspiring frontend developer</span>
        </section>
        <section className="buttons">
          <Button value="About" event1={this.changeButtonsOnHover} event2={this.changeButtonsOnLeave} />
          <Button value="Projects" event1={this.changeButtonsOnHover} event2={this.changeButtonsOnLeave} />
          <Button value="Contact" event1={this.changeButtonsOnHover} event2={this.changeButtonsOnLeave} />
        </section>
      </div>
    )
  }
}

export default Header;
