# PURPOSE

## To give the team an general idea idea of hwo to go about testing the frontend with various state-management libraries and also to:

- Provide guidelines for unit testing a frontend using React.
- What to avoid when writing tests for components
- How to pass data between components
- How to test the abstractions that occur when writing a React application.

## This isn't an instructional guide per-se but a general idea of what to shoot for when writing tests for the frontend. There are many opinions on this topic but the end result is the same -- to create a data-driven UI that is stable and provides a great user experience on any device.

### Example of a simple test from tdd-react-enzyme-v1:
#### Our utils functions to avoid repeatedly writing a wrapper component along with a second util function for finding any data-test id's of any child or component we want to test the presence of.
```js
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
```
#### The tests themselves that check for the length of the component present in the DOM. Enzyme creates a virtual DOM to render whatever youw want to test.
```js
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
```
#### Testing the behavior of the increment, decrement, and reset buttons for the counter.
```js
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
```