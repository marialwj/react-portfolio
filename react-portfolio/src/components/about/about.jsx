import React from "react";
import styles from "./about.module.css"
import memojiHi from "../../assets/memoji-hi.png"






export const About = () => {
    return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Howdy! 🤠 It's Maria. I am a .... </h2>
      <div className={styles.content}>
      <img src={memojiHi} alt="memoji" className={styles.aboutImage}
      />
   <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={pointer} alt="Cursor icon" className={styles.cursor} /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={servers} alt="Server icon"className={styles.server}/> */}
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={webDesign} alt="UI icon" className={styles.ui} /> */}
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};