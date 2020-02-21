// src/components/header/header-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import Header from "./header-view";
import { navItems } from "../../data";

test("renders learn react link", () => {
  const { getByText } = render(<Header navItems={navItems} />);
  const linkElement = getByText(/Schedule/i);
  expect(linkElement).toBeInTheDocument();
});
