// src/components/slider/slider-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import Slider from "./slider-view";

test("renders learn react link", () => {
  const { getByText } = render(<Slider />);
  const linkElement = getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
