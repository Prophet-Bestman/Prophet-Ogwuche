import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./About.module.scss";

import general from "styles/General.module.scss";
import { client, urlFor } from "client";
import MainLayout from "Layout/MainLayout";

// const abouts = [
//   {
//     title: "User Interface Implementation",
//     description: "I am a good web developer.",
//     imgUrl: "/img/about01.png",
//   },
//   {
//     title: "API Integraion",
//     description: "I am a good web developer.",
//     imgUrl: "/img/about02.png",
//   },
//   {
//     title: "State Management",
//     description: "I am a good web developer.",
//     imgUrl: "/img/about03.png",
//   },
//   {
//     title: "Technical Writing",
//     description: "I am a good web developer.",
//     imgUrl: "/img/about04.png",
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  console.log(abouts);

  return (
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
  );
};

export default About;
