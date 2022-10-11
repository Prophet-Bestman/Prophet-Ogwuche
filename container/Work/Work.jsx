import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import MainLayout from "Layout/MainLayout";
import { urlFor, client } from "client";

import styles from "./Work.module.scss";
import general from "styles/General.module.scss";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => setWorks(data));
  }, []);

  return (
    <MainLayout idName="work">
      <div>
        <h2 className={general.head_text}>
          My Creative <span>Portfolio</span> Section
          {/* <span>Good Business</span>   */}
        </h2>
        <div className={styles.app__work_filter}>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className={styles.app__work_portfolio}
          >
            {works?.map((work, idx) => (
              <div
                className={`${styles.app__work_item} ${general.app__flex}`}
                key={idx}
              >
                <div className={`${styles.app__work_img} ${general.app__flex}`}>
                  <img src={urlFor(work.imgUrl)} alt={work.name} />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className={`${styles.app__work_hover} ${general.app__flex}`}
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileHover={{ scale: [1, 0.9] }}
                        whileInView={{ scale: [0, 1] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={general.app__flex}
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileHover={{ scale: [1, 0.9] }}
                        whileInView={{ scale: [0, 1] }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={general.app__flex}
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div
                  className={`${general.app__flex} ${styles.app__work_content}`}
                >
                  <h4 className={general.bold_text}> {work.title} </h4>
                  <p className={general.p_text} style={{ marginTop: 10 }}>
                    {" "}
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Work;
