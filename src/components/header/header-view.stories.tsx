// src/components/header/header-view.stories.tsx

import React from "react";
import Header from "./header-view";
import { BrowserRouter } from "react-router-dom";
import { navItems } from "../../data";

export default {
  component: Header,
  title: "Header",
};

export const standard = () => {
  return (
    <BrowserRouter>
      <Header navItems={navItems} />
    </BrowserRouter>
  );
};
