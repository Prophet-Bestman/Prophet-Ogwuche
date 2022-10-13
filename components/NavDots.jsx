import React from "react";
import general from "../styles/General.module.scss";

const links = ["home", "about", "work", "skills", "testimonials", "contact"];
const NavDots = ({ idName }) => {
  return (
    <div className={general.app__navigation}>
      {links?.map((link) => (
        <a href={`#${link}`} key={"Link" + link}>
          <li
            style={{
              fontSize: "20px",
              color: idName === link ? "#313bac" : "#555",
            }}
          ></li>
        </a>
      ))}
    </div>
  );
};

export default NavDots;
