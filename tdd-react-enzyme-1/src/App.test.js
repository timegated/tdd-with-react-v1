import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Rendering our App Component in isolation
const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

// Util function that finds the data-test attribute on the wrapper
const findDataTest = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * These are simple tests that check if the component and it's children are simply rendering(not entirely useful)
 */
// Is our component there?
test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findDataTest(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

// Test for the existence of our display component
test('renders a display component', () => {
  const wrapper = setup();
  const displayComponent = findDataTest(wrapper, 'component-display');
  expect(displayComponent.length).toBe(1);
});

// Test for rendering of the buttons
test('renders an increment button component', () => {
  const wrapper = setup();
  const button = findDataTest(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders a decrement button component', () => {
  const wrapper = setup();
  const button = findDataTest(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('renders reset button component', () => {
  const wrapper = setup();
  const button = findDataTest(wrapper, 'reset-button');
  expect(button.length).toBe(1);
});

// Testing behavior of the buttons
test('counter increments when button is clicked', () => {
  const wrapper = setup();
  const button = findDataTest(wrapper, 'increment-button');
  button.simulate('click');

  // Testing the state in a rudimentary way by grabbing the text that is connected to it
  const count = findDataTest(wrapper, 'count').text();
  expect(Number(count)).toBe(1);
});

// Decrement
test('counter decrements when button is clicked', () => {
  const wrapper = setup();
  const button = findDataTest(wrapper, 'decrement-button');
  button.simulate('click');

  // Testing the state in a rudimentary way by grabbing the text that is connected to it
  const count = findDataTest(wrapper, 'count').text();

  expect(Number(count)).toBe(0);
});

// Reset
test('counter resets when button is clicked', () => {
  const wrapper = setup();
  const button = findDataTest(wrapper, 'reset-button');
  button.simulate('click');

  // Testing the state in a rudimentary way by grabbing the text that is connected to it
  const count = findDataTest(wrapper, 'count').text();
  expect(Number(count)).toBe(0);
});