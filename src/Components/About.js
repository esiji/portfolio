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
              Hello I'm Łukasz(Lukas) Gabriel. I aspire to become frontend developer.
              My journey with programming started in may 2019 and ever since then i love it.
              I started with python and Django but after a while i switched to learn JavaScript.
              I'm looking for an opportunity to become better developer and use my skills in real projects.
              I have good understanding of <span className="skill">HTML5</span>, <span className="skill">CSS3</span>
              with preprocessor <span className="skill">SASS</span>, <span className="skill">JavaScript</span> and <span className="skill">RWD</span>.
              I'm familiar with <span className="skill">React</span>, <span className="skill">bootstrap4</span> and <span className="skill">python</span> which means i understand
              these technologies but it's not on the same level as stuffs I'm good at/still learning.
              I use <span className="skill">chrome devtools</span> during creation process.
              I know <span className="skill">Node.js</span> and <span className="skill">NPM</span> alongside with <span className="skill">bash</span>.
              As version-control software i use <span className="skill">Git</span> and <span className="skill">Github</span> as repository.
              Willing to learn anything new, it's not a problem for me to learn new stuffs and i really enjoy it.
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
