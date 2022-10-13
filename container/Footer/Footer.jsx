import React, { useState } from "react";

import styles from "./Footer.module.scss";
import general from "styles/General.module.scss";

import { images } from "constants";
import { AnimationWrapper } from "Layout";
import MainLayout from "Layout/MainLayout";
import { client } from "client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false);
      }, 5000);
    });
  };
  return (
    <div style={{ backgroundColor: "#333" }}>
      <AnimationWrapper>
        <MainLayout idName="contact">
          <h2
            className={general.head_text}
          >{`Take a coffee & chat with me`}</h2>

          <div className={styles.app__footer_cards}>
            <div className={styles.app__footer_card}>
              <img src="/img/email.png" alt="email" />
              <a href="mailto:bestiproph@gmail.com" className={general.p_text}>
                bestiproph@gmail
              </a>
            </div>
            <div className={styles.app__footer_card}>
              <img src="/img/mobile.png" alt="mobile" />
              <a href="tel: +2347046364050" className={general.p_text}>
                +234 704 6354 050
              </a>
            </div>
          </div>

          {!isSubmitted ? (
            <div className={`${styles.app__footer_form} ${general.app__flex}`}>
              <div>
                <input
                  type="text"
                  name="name"
                  className={general.p_text}
                  placeholder="Your Name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className={general.p_text}
                  placeholder="Your Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  className={general.p_text}
                  placeholder="Your Message"
                  name={"message"}
                  value={message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="button"
                className={general.p_text}
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          ) : (
            <div>
              <h3 className={general.head_text}>Thank you for reaching out</h3>
            </div>
          )}
        </MainLayout>
      </AnimationWrapper>
    </div>
  );
};

export default Footer;
