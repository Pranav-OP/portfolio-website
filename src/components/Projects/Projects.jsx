import {React} from "react";
import Styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
    return (
        <section className={Styles.container} id="projects">
            <h2 className={Styles.title}>Projects</h2>
            <div className={Styles.projectCards}>
                {
                    projects.map((project,id) => {
                        return(
                            <div key={id} className={Styles.cardContainer}>

                                <img src={getImageUrl(project.imageSrc)} alt={project.title} className={Styles.cardImage}/>
                                <h3 className={Styles.cardTitle}>{project.title}</h3>
                                <p className={Styles.description}>{project.description}</p>

                                <ul className={Styles.skills}>
                                    {
                                        project.skills.map((skill,id) => {
                                           return (
                                                <li key={id} className={Styles.skill}>{skill}</li>
                                           );
                                        })
                                    }
                                </ul>
                                
                                <div className={Styles.links}>
                                    <a href={project.demo} className={Styles.link} target="_blank">Visit ↗️</a>
                                    <a href={project.source} className={Styles.link} target="_blank">Source 🔗</a>
                                </div>

                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}