// src/components/header/header-view.tsx

import React from "react";
import styles from "./header-view.module.scss";
import logo from "../../images/ACCC-Logo.png";

const Header: React.FC = () => {
  const clickHandler = () => console.log("TODO: Use click handler...");

  const navItems = ["Schedule", "Results", "Rules", "News", "Leadership"];

  return (
    <div className={styles.header}>
      <img onClick={clickHandler} className={styles.logo} src={logo} alt="ACCC Logo"></img>
      <nav>
        <ul className={styles.navigation}>
          {navItems.map((navItem: string) => {
            return (
              <li key={navItem} className={styles.navItem}>
                <div>{navItem}</div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
