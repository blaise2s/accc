// src/components/page-dots/page-dot/page-dot-view.tsx

import React from "react";
import styles from "./page-dot-view.module.scss";

const PageDot: React.FC<{ clickHandler?: () => void; isActive?: boolean; color?: string }> = ({ clickHandler, isActive, color }) => {
  const classes = [styles.pageDot, isActive ? styles.active : ""];
  return <div onClick={clickHandler} className={classes.join(" ")} style={color ? { backgroundColor: color } : undefined} />;
};

export default PageDot;
