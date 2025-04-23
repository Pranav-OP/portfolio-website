import React from "react";
import Styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () =>{

    return(
        <section className={Styles.container} id="about">

            <h2 className={Styles.title}>About</h2>

            <div className={Styles.content}>
                
                <img className={Styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="about-image"/>

                <ul className={Styles.aboutItems}>
                    <li className={Styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server-image"/>
                        <div className={Styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>I have hands-on experience building scalable backend services using .NET Core and Flask, implementing REST APIs, JWT authentication, audit trails & building background services across various enterprise projects.</p>
                        </div>
                    </li>
                    <li className={Styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-image"/>
                        <div className={Styles.aboutItemText}>
                            <h3>Database Development</h3>
                            <p>Skilled in managing and optimizing relational databases with PostgreSQL, MySQL, and SQL Server, including crafting stored procedures, schema manipulation & design, and integrating ORMs like Entity Framework and SQLAlchemy.</p>
                        </div>
                    </li>
                    <li className={Styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui-image"/>
                        <div className={Styles.aboutItemText}>
                            <h3>UI Development</h3>
                            <p>Currently diving in the world of React, I’ve worked on enhancing user experience by developing dynamic frontend components using Razor pages, HTML, CSS, Bootstrap, and jQuery, including performance-optimized UI features and dashboard partial views.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};