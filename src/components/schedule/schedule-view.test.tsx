// src/components/schedule/schedule-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import Schedule from "./schedule-view";

test("renders learn react link", () => {
  const { getByText } = render(<Schedule />);
  const linkElement = getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
