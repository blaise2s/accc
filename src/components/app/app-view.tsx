// src/components/app/app-view.tsx

import React from "react";
import styles from "./app-view.module.scss";
import { Header } from "../";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
};

export default App;
