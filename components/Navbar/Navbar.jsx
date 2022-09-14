import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import styles from "./Navbar.module.scss";
import general from "styles/General.module.scss";

const links = ["home", "about", "contact", "work", "skill"];

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <img src="/img/logo.png" alt="logo" />
      </div>
      <ul className={styles.app__navbar_links}>
        {links?.map((link) => (
          <li key={link} className={`${general.app__flex} ${general.p_text}`}>
            <div />
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className={styles.app__navbar_menu}>
        <HiMenuAlt4
          onClick={() => {
            setShowMobile(true);
          }}
        />

        {showMobile && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <HiX onClick={() => setShowMobile(false)} />
            <ul>
              {links?.map((link) => (
                <li
                  key={"Link" + link}
                  // className={`${general.app__flex} ${general.p_text}`}
                >
                  <a onClick={() => setShowMobile(false)} href={`#${link}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
