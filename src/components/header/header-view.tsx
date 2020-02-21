// src/components/header/header-view.tsx

import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./header-view.module.scss";
import logo from "../../images/ACCC-Logo.png";

export interface NavItem {
  title: string;
  path: string;
}

const Header: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  const classes = [styles.navItem, styles.center, styles.link];

  const renderNav = () => {
    return navItems.map((navItem: NavItem) => {
      return (
        <NavLink key={navItem.title} className={classes.join(" ")} to={navItem.path} activeClassName={styles.active}>
          {navItem.title}
        </NavLink>
      );
    });
  };

  return (
    <div className={styles.header}>
      <Link className={`${styles.link} ${styles.linkLogo}`} to="/">
        <img className={styles.logo} src={logo} alt="ACCC Logo"></img>
      </Link>
      <nav>
        <ul className={styles.navigation}>{renderNav()}</ul>
      </nav>
    </div>
  );
};

export default Header;
