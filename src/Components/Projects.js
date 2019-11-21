import React from 'react';
import '../Styles/App.css';


class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {projects: ['maze', 'canG', 'urg', 'portfolio']}
        this.onProjectClick = this.onProjectClick.bind(this)
        this.onLeaveProject = this.onLeaveProject.bind(this)
    }

    onProjectClick(e){
        let projects = this.state.projects
        let projectsEl = projects.map(project => document.getElementById(project))
        projectsEl.forEach(element => {
            let elementInfo = document.getElementById(`${element.id}-info`)
            if(element.id === e.target.parentNode.id) {
                elementInfo.childNodes.forEach(element => {
                    if(element.nodeName.toLowerCase() === "a"){
                        if(element.classList.contains("inactive-link")){
                            element.classList.remove('inactive-link')
                        }
                    }
                })
                element.classList.add('toggle-project')
            }else {
                if(element.classList.contains('toggle-project')){
                    element.classList.remove('toggle-project')
                    elementInfo.childNodes.forEach(element => {
                        if(element.nodeName.toLowerCase() === "a"){
                            if(!element.classList.contains("inactive-link")){
                                element.classList.add('inactive-link')  
                            }
                        }
                    })
                }
            }
        })
    }

    onLeaveProject() {
        this.state.projects.forEach(project => {
            let element = document.getElementById(project)
            let elementInfo = document.getElementById(`${project}-info`)
            if(element.classList.contains('toggle-project')) {
                element.classList.remove('toggle-project')
            }
            elementInfo.childNodes.forEach(element => {
                if(element.nodeName.toLocaleLowerCase() === "a") {
                    if(!element.classList.contains("inactive-link")){
                        element.classList.add('inactive-link')
                    }
                }
            })
        })
    }

    render() {
        return (
          <section className="projects">
            <h2 className="projects-title">Projects</h2>
            <figure id="maze" className="project-container" onClick={this.onProjectClick} onMouseLeave={this.onLeaveProject}>
                <img className="project-img" src={require("../Styles/images/MazeGen.png")} alt="Maze generator" />
                <figcaption id="maze-info" className="project-information">
                    <span className="project-title">Maze Generator</span>
                    <p>Creates and solves mazes.</p>
                    <a className="inactive-link" target="_blank" href="https://esiji.github.io/Maze-gen0/">Link</a>
                    <a className="inactive-link" target="_blank" href="https://github.com/esiji/Maze-gen0">Code</a>
                </figcaption>
            </figure>
            <figure id="canG" className="project-container" onClick={this.onProjectClick} onMouseLeave={this.onLeaveProject}>
                <img className="project-img" src={require("../Styles/images/cang.png")} alt="Maze generator" />
                <figcaption id="canG-info" className="project-information">
                    <span className="project-title">Canvas Game</span>
                    <p>One level game made in canvas.(Not mobile firendly)</p>
                    <a className="inactive-link" target="_blank" href="https://esiji.github.io/Canvas-Game/">Link</a>
                    <a className="inactive-link" target="_blank" href="https://github.com/esiji/Canvas-Game">Code</a>
                </figcaption>
            </figure>
            <figure id="urg" className="project-container" onClick={this.onProjectClick} onMouseLeave={this.onLeaveProject}>
                <img className="project-img" src={require("../Styles/images/Urg.png")} alt="Maze generator" />
                <figcaption id="urg-info" className="project-information">
                    <span className="project-title">URG</span>
                    <p>Simple website that uses Unsplash API to display some random pictures.</p>
                    <a className="inactive-link" target="_blank" href="https://urg-fbe38.firebaseapp.com/">Link</a>
                    <a className="inactive-link" target="_blank" href="https://github.com/esiji/URG">Code</a>
                </figcaption>
            </figure>
            <figure id="portfolio" className="project-container" onClick={this.onProjectClick} onMouseLeave={this.onLeaveProject}>
                <img className="project-img" src={require("../Styles/images/Portfolio.png")} alt="Maze generator" />
                <figcaption id="portfolio-info" className="project-information">
                    <span className="project-title">Portfolio</span>
                    <p>Simple portfolio made for me.</p>
                    <a className="inactive-link" target="_blank" href="https://github.com/esiji/portfolio">Code</a>
                </figcaption>
            </figure>
          </section>
        )
    }
}   

export default Projects;
