import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";



test("renders App without crashing", () => {
  const wrapper = render(<App />);

  console.log(wrapper.debug());
});

it("finds first name field and checks for required", () => {
  render(<App />);
  const firstName = screen.getByTestId("firstName");

  expect(firstName).toBeInTheDocument();
  expect(firstName).toBeRequired();
});

it("finds last name field and checks for required", () => {
  render(<App />);
  const lastName = screen.getByTestId("lastName");

  expect(lastName).toBeInTheDocument();
  expect(lastName).toBeRequired();
});

it("finds email field and checks for required", () => {
  render(<App />);
  const email = screen.getByTestId("email");

  expect(email).toBeInTheDocument();
  expect(email).toBeRequired();
});




