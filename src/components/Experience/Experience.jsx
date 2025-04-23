import { React} from "react";
import Styles  from "./Experience.module.css";
import skills  from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return(
        <section className={Styles.container} id="experience"> 

            <h2 className={Styles.title}>Skillset & Experience</h2>

            <div className={Styles.content}>
                <div className={Styles.skills}>
                    {
                        skills.map((skill,id) => {
                            return (
                                <div key={id} className={Styles.skill}>
                                    <div className={Styles.skillImage}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })
                    }
                </div>

                <ul className={Styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return(
                                <li key={id} className={Styles.historyItem}>

                                    <span className={Styles.ribbonLeft}></span>
                                    <span className={Styles.ribbonRight}></span>
                                    
                                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${history.organisation} logo`} />

                                    <div className={Styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}`}</h3>
                                        <h4>{`${historyItem.organisation}`}</h4>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                                        <ul>
                                            {historyItem.experiences.map((exp, id) => {
                                                return (
                                                    <li key={id}>{exp}</li>
                                                );
                                            })}
                                        </ul>

                                    </div>

                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

