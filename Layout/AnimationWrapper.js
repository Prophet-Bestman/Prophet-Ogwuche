import React from "react";
import { motion } from "framer-motion";
import general from "styles/General.module.scss";

const AnimationWrapper = ({ children, classNames }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1 }}
      className={`${general.app__flex} ${classNames}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
