// src/components/page-dots/page-dot/page-dot-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import PageDot from "./page-dot-view";

test("renders learn react link", () => {
  const { getByText } = render(<PageDot />);
  const linkElement = getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
