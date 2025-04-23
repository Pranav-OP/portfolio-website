import React, { useState, useRef } from "react";
import Styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{

    const [showThumbsUp, setShowThumbsUp] = useState(false);
    const btnRef = useRef(null);

    const handleDownloadClick = () => {
        setShowThumbsUp(true);
        setTimeout(() => {
            setShowThumbsUp(false);
        }, 1500);
    };


    return(
        <section className={Styles.container}>
            <div className={Styles.content}> 
                <h1 className={Styles.title}>Hi, I'm Pranav</h1>
                <p className={Styles.description}>A passionate software engineer with 2+ years of experience in software development 👨🏻‍💻.{"\n"} Ping me, if you like to talk about Distributed Systems, Databases & AI 🚀</p>
                
                <div className={Styles.buttonWrapper}>
                    <a ref={btnRef} className={`${Styles.downloadBtn} ${showThumbsUp ? Styles.btnShift : ""}`}
                        href="/resume.pdf" download onClick={handleDownloadClick}>
                        Download CV 📩
                    </a>
                    {showThumbsUp && ( <img className={Styles.thumbsUp} src={getImageUrl('hero/thumbsup.png')} alt="thumbs-up"/> )}
                </div>

            </div>

            <img className={Styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero-image" />
            <div className={Styles.topBlur}></div>
            <div className={Styles.bottomBlur}></div>

        </section>
    );
};