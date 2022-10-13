import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./About.module.scss";

import general from "styles/General.module.scss";
import { client, urlFor } from "client";
import MainLayout from "Layout/MainLayout";
import { AnimationWrapper } from "Layout";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div style={{ backgroundColor: "#333" }}>
      <AnimationWrapper>
        <MainLayout idName="about">
          <h2 className={general.head_text}>
            I Know That <span>Good Software</span> <br /> means{" "}
            <span>Good Business</span>
          </h2>
          <div className={styles.app__profiles}>
            {abouts?.length > 0 &&
              abouts?.map((about, i) => (
                <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
                  className={styles.app__profiles_item}
                  key={about.title + i}
                >
                  <img src={urlFor(about.imgUrl)} alt={about.title} />
                  <h2 className={general.bold_text} style={{ marginTop: 20 }}>
                    {about.title}
                  </h2>
                  <p className={general.p_text}>{about?.description}</p>
                </motion.div>
              ))}
          </div>
        </MainLayout>
      </AnimationWrapper>
    </div>
  );
};

export default About;
