import { NavDots, SocialMedia } from "components";
import React from "react";
import general from "../styles/General.module.scss";

const MainLayout = ({ children, idName, classNames }) => {
  return (
    <div
      id={idName}
      className={`${general.app__container} ${classNames || ""}`}
    >
      <SocialMedia />
      <div className={`${general.app__wrapper}  ${general.app__flex}`}>
        {children}
        <div className={general.copyright}>
          <p className={general.p_text}>@2022 PROPHET</p>
          <p className={general.p_text}>Runs on sanity backend</p>
          <p className={general.p_text}>All Rights Reserved</p>
        </div>
      </div>

      <NavDots idName={idName} />
    </div>
  );
};

export default MainLayout;
