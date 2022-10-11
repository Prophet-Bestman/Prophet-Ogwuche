import React from "react";
import general from "../styles/General.module.scss";

const links = ["home", "about", "work", "skill", "testimonials", "contact"];
const NavDots = ({ idName }) => {
  return (
    <div className={general.app__navigation}>
      {links?.map((link) => (
        <li
          key={"Link" + link}
          // className={`${general.app__flex} ${general.p_text}`}
          style={{
            fontSize: "20px",
            color: idName === link ? "#313bac" : "#33333333",
          }}
        >
          <a onClick={() => setShowMobile(false)} href={`#${link}`}>
            {/* {link} */}
          </a>
        </li>
      ))}
    </div>
  );
};

export default NavDots;
