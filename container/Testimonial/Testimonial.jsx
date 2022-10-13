import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "client";

import general from "styles/General.module.scss";
import styles from "./Testimonial.module.scss";
import MainLayout from "Layout/MainLayout";
import { AnimationWrapper } from "Layout";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Skills = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [showTooltip, setShowTooltip] = useState(true);

  const test = testimonials[currentIndex];

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandQuery = '*[_type == "brands"]';
    client.fetch(query).then((data) => setTestimonials(data));
    client.fetch(brandQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else setCurrentIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else setCurrentIndex((prev) => prev + 1);
  };

  return (
    <AnimationWrapper>
      <MainLayout idName="testimonials">
        <>
          <h2 className={general.head_text}>
            What My <span>Clients</span> Have To <span>Say</span>
          </h2>

          <div className={styles.app__testimonials}>
            {testimonials?.length > 0 && (
              <motion.div
                transition={{ x: [0, 1], duration: 0.5 }}
                className={`${styles.app__testimonials_item} ${general.app__flex}`}
              >
                <img src={urlFor(test?.imgurl)} />
                <div className={styles.app__testimonials_content}>
                  <p className={general.p_text}>{test?.feedback}</p>

                  <div>
                    <h4 className={general.bold_text}>{test?.name}</h4>
                    <h5 className={general.p_text}>{test?.company}</h5>
                  </div>
                </div>
              </motion.div>
            )}

            <div className={styles.app__testimonials_btns}>
              <div className={general.app__flex} onClick={handlePrev}>
                <HiChevronLeft />
              </div>
              <div className={general.app__flex} onClick={handlePrev}>
                <HiChevronRight />
              </div>
            </div>
          </div>
        </>
      </MainLayout>
    </AnimationWrapper>
  );
};

export default Skills;
