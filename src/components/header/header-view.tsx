// src/components/header/header-view.tsx

import React from "react";
import styles from "./header-view.module.scss";
import logo from "../../images/ACCC-Logo.png";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="ACCC Logo"></img>
    </div>
  );
};

export default Header;
