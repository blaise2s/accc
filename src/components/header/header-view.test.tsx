// src/components/header/header-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import Header from "./header-view";

test("renders learn react link", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
