import React from 'react';
import styles from "../../components/intro/intro.module.css";




export const Intro = () => {
    return( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I`m Maria </h1>
            <p className={styles.description}>Hello! I`m Maria, and I`m delighted to have the opportunity to introduce myself to you. As a dedicated and driven marketing professional, I have a true passion for creating meaningful connections through the art of storytelling. Currently, I am honing my skills at UCLA, where I am pursuing a certification in full-stack coding course, as well as a UX Design course. 
With a solid background in marketing strategies and expertise in social media, I thrive in dynamic environments where I can actively contribute to the growth and success of companies. I have an insatiable curiosity and a genuine eagerness to learn, always staying up-to-date with the latest industry trends. I would love to connect with you and explore potential opportunities for collaboration!</p>
        <a href="mailto:mariaa.georgy@gmail.com" className={styles.contactBtn}>Contact Me</a>
        <img src="../../assets/profile-pic.png" alt="Maria's Face" className={styles.introImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        </div>
    </section>
    );
};