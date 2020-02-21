// src/components/page-dots/page-dots-view.stories.tsx

import React, { CSSProperties } from "react";
import PageDots from "./page-dots-view";
// import { number, withKnobs } from "@storybook/addon-knobs";

export default {
  component: PageDots,
  title: "PageDots",
  // decorators: [withKnobs],
  // parameters: {
  //   options: {
  //     selectedPanel: "storybookjs/knobs/panel",
  //   },
  // },
};

const containerStyle: CSSProperties = {
  backgroundColor: "lightblue",
  height: "10rem",
  position: "relative",
};

const dotsContainerStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "inherit",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "flex-end",
};

export const standard = () => {
  return (
    <div style={containerStyle}>
      <div style={dotsContainerStyle}>
        <PageDots numDots={5} />
      </div>
    </div>
  );
};
