// src/components/header/header-view.tsx

import React from "react";
import styles from "./header-view.module.scss";
import logo from "../../images/ACCC-Logo.png";

const Header: React.FC = () => {
  const homeClickHandler = () => console.log("TODO: Use click handler...");

  const navClickHandler = (link: string) => console.log(`TODO: Handle click to page ${link}`);

  const navItems = ["Schedule", "Results", "Rules", "News", "Leadership"];
  const classes = [styles.navItem, styles.fillFrom, styles.center];

  return (
    <div className={styles.header}>
      <img onClick={homeClickHandler} className={styles.logo} src={logo} alt="ACCC Logo"></img>
      <nav>
        <ul className={styles.navigation}>
          {navItems.map((navItem: string) => {
            return (
              <li onClick={() => navClickHandler(navItem)} key={navItem} className={classes.join(" ")}>
                {navItem}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
