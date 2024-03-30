import React from 'react';
import styles from "../../components/intro/intro.module.css";
import profilePic from "../../assets/profile-pic.png";


export const Intro = () => {
    return( 
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I`m Maria </h1>
            <img src={profilePic} alt="Maria's Face" className={styles.introImg} />
            <p className={styles.description}>As a dedicated and driven marketing professional, I have a true passion for creating meaningful connections through the art of storytelling. Currently, I am honing my skills at UCLA, where I am pursuing a certification in full-stack coding course, as well as a UX Design course. 
With a solid background in marketing strategies and expertise in social media, I always staying up-to-date with the latest industry trends. I would love to connect with you and explore potential opportunities for collaboration!</p>
        <a href="mailto:mariaa.georgy@gmail.com" className={styles.contactBtn}>Contact Me</a>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        </div>
    </section>
    );
};