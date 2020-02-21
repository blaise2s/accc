// src/components/page-dots/page-dot/page-dot-view.stories.tsx

import React, { CSSProperties } from "react";
import PageDot from "./page-dot-view";

export default {
  component: PageDot,
  title: "PageDot",
};

const style: CSSProperties = {
  padding: "1rem",
  backgroundColor: "lightblue",
};

export const active = () => {
  return (
    <div style={style}>
      <PageDot isActive />
    </div>
  );
};

export const inActive = () => {
  return (
    <div style={style}>
      <PageDot />
    </div>
  );
};
