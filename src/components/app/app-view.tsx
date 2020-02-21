// src/components/app/app-view.tsx

import React from "react";
import styles from "./app-view.module.scss";
import { Header, Schedule } from "../";
import { BrowserRouter, Route } from "react-router-dom";
import { navItems } from "../../data";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header navItems={navItems} />
        <Route exact path="/schedule" component={Schedule} />
      </div>
    </BrowserRouter>
  );
};

export default App;
