import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "client";

import general from "styles/General.module.scss";
import styles from "./Skills.module.scss";
import MainLayout from "Layout/MainLayout";
import ReactTooltip from "react-tooltip";
import { AnimationWrapper } from "Layout";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  // const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    const experienceQuery = '*[_type == "experiences"]';
    client.fetch(query).then((data) => setSkills(data));
    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
  }, []);
  return (
    <div style={{ backgroundColor: "#333" }}>
      <AnimationWrapper>
        <MainLayout idName="skills">
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

              <motion.div className={styles.app__skills_exp}>
                {experience?.map((exp) => (
                  <motion.div
                    className={styles.app__skills_exp_item}
                    key={exp.year}
                  >
                    <div className={styles.app__skills_exp_year}>
                      <p className={general.bold_text}>{exp.year}</p>
                    </div>

                    <div className={styles.app__skills_exp_works}>
                      {exp?.works?.map((work) => (
                        <>
                          <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            key={work.company}
                            data-for={work.name}
                            className={styles.app__skills_exp_work}
                            data-tip
                            // onMouseEnter={() => setShowTooltip(true)}
                            // onMouseLeave={() => {
                            //   setShowTooltip(false);
                            //   // setTimeout(() => setShowTooltip(false), 500);
                            // }}
                          >
                            <h4 className={general?.bold_text}>{work.name}</h4>
                            <p className={general.p_text}>{work.company}</p>
                            <p
                              className={general.p_text}
                              style={{ fontSize: "12px" }}
                            >
                              {work.desc}
                            </p>
                          </motion.div>
                          {/* {setShowTooltip && ( */}
                          <ReactTooltip
                            id={work.company}
                            effect="solid"
                            arrowColor="#fff"
                            className={styles.skills_tooltip}
                          >
                            {work.desc}
                          </ReactTooltip>
                          {/* )} */}
                        </>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </>
        </MainLayout>
      </AnimationWrapper>
    </div>
  );
};

export default Skills;
