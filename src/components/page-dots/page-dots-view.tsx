// src/components/page-dots/page-dots-view.tsx

import React, { useState, useEffect } from "react";
import PageDot from "./page-dot";
import styles from "./page-dots-view.module.scss";

const PageDots: React.FC<{ numDots: number }> = ({ numDots }) => {
  const [dots, setDots] = useState(
    new Map([
      [0, true],
      [1, false],
      [2, false],
      [3, false],
      [4, false],
    ]),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newDots = new Map(dots);
      const newActive = (active + 1) % dots.size;
      newDots.set(active, false);
      newDots.set(newActive, true);
      setActive(newActive);
      setDots(newDots);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  const [active, setActive] = useState(0);

  const clickHandler = (key: number) => {
    if (key !== active) {
      const newDots = new Map(dots);
      newDots.set(active, false);
      newDots.set(key, true);
      setActive(key);
      setDots(newDots);
    }
  };

  const pageDots: JSX.Element[] = [];
  dots.forEach((dotStatus: boolean, key: number) => {
    pageDots.push(<PageDot key={key} isActive={dotStatus} clickHandler={() => clickHandler(key)} />);
  });

  return <div className={styles.pageDots}>{pageDots}</div>;
};

export default PageDots;
