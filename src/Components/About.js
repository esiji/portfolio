import React from 'react';
import '../Styles/App.css';


class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {iconClass : "fa-2x"}
    this.onResize = this.onResize.bind(this)
  }

  onResize(){
    if(window.innerWidth < 500) {
      this.setState({iconClass : "fa-2x"})
    }
    else if(window.innerWidth < 1000){
      this.setState({iconClass : "fa-3x"})
    }
    else if(window.innerWidth >= 1000){
      this.setState({iconClass : "fa-5x"})
    }

  }
  
  
  componentWillMount() {
    this.onResize()
    window.addEventListener("resize", this.onResize)
  }

  render() {
    return (
      <section>
          <article className="about">
            <h2 className="title">About me</h2>
            <p className="description">
              <span>Hello I'm Lukas Gabriel.</span> I aspire to become web-developer
            </p>
            <section className="skills">
                <h3>Skills</h3>
                <h4>Good at:</h4>
                <div>
                  <div>
                    <i className={`fab fa-html5 ${this.state.iconClass}`}></i>
                    <span>HTML5</span>
                  </div>
                  <div>
                    <i className={`fab fa-css3-alt ${this.state.iconClass}`}></i>
                    <span>CSS3</span>
                  </div>
                  <div>
                    <i className={`fab fa-sass ${this.state.iconClass}`}></i>
                    <span>SASS</span>
                  </div>
                  <div>
                    <i className={`fab fa-js-square ${this.state.iconClass}`}></i>
                    <span>JavaScript <br/> (ES6+)</span>
                  </div>
                </div>
                <h4>Familiar with:</h4>
                <div>
                  <div>
                    <i className={`fab fa-react ${this.state.iconClass}`}></i>
                    <span>React</span>
                  </div>
                  <div>
                    <i className={`fab fa-bootstrap ${this.state.iconClass}`}></i>
                    <span>Bootstrap <br /> 4</span>
                  </div>
                  <div>
                    <i className={`fab fa-python ${this.state.iconClass}`}></i>
                    <span>Python</span>
                  </div>
                </div>
            </section>
          </article>
      </section>
    )
  }
}

export default About;
