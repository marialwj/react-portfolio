import React from "react";
import styles from "./about.module.css"



export const About = () => {
    return (
    <section>
        <h2> About</h2>
        <img src="../../assets/about-me.png" alt="Devon Pic" className={styles.aboutImage}/>
        <div>
            <h3>Frontend Developer</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

        </div>
    </section>
    )
};