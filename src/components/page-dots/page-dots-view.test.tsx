// src/components/page-dots/page-dots-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import PageDots from "./page-dots-view";

test("renders learn react link", () => {
  const { getByText } = render(<PageDots numDots={5} />);
  const linkElement = getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
