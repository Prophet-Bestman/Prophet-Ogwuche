import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import MainLayout from "Layout/MainLayout";
import { urlFor, client } from "client";

import general from "styles/General.module.scss";
import styles from "./Skills.module.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experience"]';
    client.fetch(query).then((data) => setSkills(data));
    client.fetch(experienceQuery).then((data) => setExperience(data));
  }, []);
  return (
    <>
      <h2 className={general.head_text}>Skills and Experience</h2>

      <div className={styles.app__skills_container}>
        <motion.div className={styles.app__skills_list}>
          {skills?.length > 0 &&
            skills?.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={skill.name}
                className={styles.app__skills_item}
              >
                <div
                  className={general.app__flex}
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className={general.p_text}>{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
