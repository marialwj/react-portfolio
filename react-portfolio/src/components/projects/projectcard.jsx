import React from "react";
import styles from "./projectcard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {skills && skills.length > 0 && (
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.links}>
        {demo && (
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};
