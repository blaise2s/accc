// src/components/slider/slider-view.tsx

import React from "react";
import styles from "./slider-view.module.scss";
import PageDots from "../page-dots";

const Slider: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.overlay}>
        <button className={styles.control}>
          <svg className="fas fa-chevron-left" />
        </button>
        <button className={styles.control}>
          <svg className="fas fa-chevron-right" />
        </button>
      </div>
      <div className={styles.pageDotsOverlay}>
        <div className={styles.pageDots}>
          <PageDots numDots={5} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
