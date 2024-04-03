// resume.jsx
import React from 'react';
import styles from './resume.module.css'; // You can create a new CSS module or reuse the about.module.css
// import educationIcon from '../../assets/education-icon.png'; // Replace with your actual icons and images
// import experienceIcon from '../../assets/experience-icon.png';
// import skillsIcon from '../../assets/skills-icon.png';
import resumePdf from '../../assets/resume.pdf'; // Link to your resume PDF

export const Resume = () => {
    return (
        <section className={styles.container} id="resume">
            <h2 className={styles.title}>Resume</h2>
            <div className={styles.content}>
                <ul className={styles.resumeItems}>
                    <li className={styles.resumeItem}>
                        {/* <img src={educationIcon} alt="Education icon" className={styles.icon} /> */}
                        <div className={styles.resumeItemText}>
                            <h3>Education</h3>
                            <p>Details about your educational background...</p>
                        </div>
                    </li>
                    <li className={styles.resumeItem}>
                        {/* <img src={experienceIcon} alt="Experience icon" className={styles.icon} /> */}
                        <div className={styles.resumeItemText}>
                            <h3>Experience</h3>
                            <p>Details about your professional experience...</p>
                        </div>
                    </li>
                    <li className={styles.resumeItem}>
                        {/* <img src={skillsIcon} alt="Skills icon" className={styles.icon} /> */}
                        <div className={styles.resumeItemText}>
                            <h3>Skills</h3>
                            <p>A list of your relevant skills...</p>
                        </div>
                    </li>
                </ul>
                <a href={resumePdf} download className={styles.downloadButton}>Download Resume</a>
            </div>
        </section>
    );
};
