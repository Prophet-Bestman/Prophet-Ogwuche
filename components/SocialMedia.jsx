import React from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import general from "../styles/General.module.scss";

const SocialMedia = () => {
  return (
    <div className={general?.app__social}>
      <div>
        <AiOutlineTwitter />
      </div>
      <div>
        <AiFillFacebook />
      </div>
      <div>
        <AiFillLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
