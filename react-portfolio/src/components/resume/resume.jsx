// resume.jsx
import React from 'react';
import styles from './resume.module.css'; // You can create a new CSS module or reuse the about.module.css
import resumePdf from '../../assets/resume.pdf'; // Link to your resume PDF
// import memojiHeart from '../../assets/memoji-heart.png'; // Link to your memoji image

export const Resume = () => {
    return (
        <section className={styles.container} id="resume">
            <h2 className={styles.title}>Resume/Proficiencies</h2>
            {/* <img src={memojiHeart} alt="memoji" className={styles.resumeImage}/> */}
            <div className={styles.content}>
                <ul className={styles.resumeItems}>
                    <li className={styles.resumeItem}>
                        {/* <img src={educationIcon} alt="Education icon" className={styles.icon} /> */}
                        <div className={styles.resumeItemText}>
                            <h3>Frontend Proficiencies</h3>
                            <p>♥︎ HTML5, CSS3, JavaScript</p>
                            <p>♥︎ React, Redux, Node.js, Express, Bootstrap, jQuery</p>
                            <p>♥︎ Responsive Web Desigign, Cross-Browser Compatibility, Mobile First Design</p>
                            <p>♥︎ Familiarity with design tools like Adobe XD, Sketch, or Figma</p>
                        </div>
                    </li>
                    <li className={styles.resumeItem}>
                        {/* <img src={experienceIcon} alt="Experience icon" className={styles.icon} /> */}
                        <div className={styles.resumeItemText}>
                            <h3>Backend Proficiencies</h3>
                            <p>♥︎ Node.js, Python, Java</p>
                            <p>♥︎ Express.js for Node</p>
                            <p>♥︎ Relational Databases (MySQL, SQL Server)</p>
                        </div>
                    </li>
                </ul>
                <a href={resumePdf} download className={styles.downloadButton}>Download Resume</a>
            </div>
        </section>
    );
};
