import React from "react";
import { motion } from "framer-motion";

import styles from "./Header.module.scss";
import general from "styles/General.module.scss";
import MainLayout from "Layout/MainLayout";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const images = ["/img/javascript.png", "/img/react.png", "/img/next-js.png"];

const Header = () => {
  return (
    <MainLayout idName="home">
      <div id="home" className={`${styles.app__header} ${general.app__flex}`}>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className={`${styles.app__header_info}`}
        >
          <div className={styles.app__header_barge}>
            <div className={`${styles.barge_cmp} ${general.app__flex}`}>
              <span>👋🏽</span>

              <div style={{ marginLeft: "20px" }}>
                <p className={general.p_text}>Hello, I am</p>
                <h1 className={styles.head_text}>Prophet</h1>
              </div>
            </div>

            <div className={`${general.app__flex} ${styles.tag_cmp}`}>
              <p className={general.p_text}>Software Developer - </p>
              <p className={general.p_text}>JavaScript - </p>
              <p className={general.p_text}>React JS - </p>
              <p className={general.p_text}>Next JS - </p>
              <p className={general.p_text}>Node JS - </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 2, delayChildren: 0.5 }}
          className={`${styles.app__header_img}`}
        >
          <img src="/img/prophet_profile.png" alt="Prophet Bestman" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`${styles.overlay_circle}`}
            src="/img/circle.svg"
          />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className={styles.app__header_circles}
        >
          {images?.map((circle, i) => (
            <div
              key={`${circle}-${i}`}
              className={`${styles.circle_cmp} ${general.app__flex}`}
            >
              <img src={circle} />
            </div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Header;
