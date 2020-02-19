// src/components/app/app-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import App from "./app-view";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
