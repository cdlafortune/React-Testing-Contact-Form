// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import { render } from '@testing-library/react';
import App from "./App";
import React from "react";


// it('renders app in test file', () => {
//     render(<App/>)
// });