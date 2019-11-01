import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import { testNameToKey } from 'jest-snapshot/build/utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Display renders to screen without crashing", () => {
  render(<Display/>);
});

test("Dashboard renders to screen without crashing", () => {
  render(<Dashboard/>);
});