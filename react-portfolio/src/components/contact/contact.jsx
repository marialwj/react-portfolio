import React from "react";
import styles from "./contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Let's Connect!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/src/assets/emailIcon.png"} alt="Email icon" />
          <a href="mailto:mariaa.georgy@email.com">mariaa.georgy@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"src/assets/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mariageorgy/">linkedin.com/in/mariageorgy/</a>
        </li>
        <li className={styles.link}>
          <img src={"src/assets/githubIcon.png"} alt="Github icon" />
          <a href="https://www.github.com/marialwj">github.com/marialwj</a>
        </li>
      </ul>
    </footer>
  );
};