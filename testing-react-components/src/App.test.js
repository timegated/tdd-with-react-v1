// import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

beforeEach(() => {
  document.body.innerHTML = '';
});

// Initial Value 
test('renders counter component', () => {
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(<Counter />, div);

  const counter = document.body.querySelector('.counter');
  expect(counter.textContent).toBe('count: 0');
  console.log(document.body.innerHTML);
});

// Increment
test('increments counter on click', () => {
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(<Counter />, div);

  const counter = document.body.querySelector('.counter');
  expect(counter.textContent).toBe('count: 0');
  console.log(document.body.innerHTML);

  // Interactions
  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  });

  const increment = document.querySelector('.increment');

  // increment.click();
  increment.dispatchEvent(incrementClickEvent);
  expect(counter.textContent).toBe('count: 1');
  console.log(document.body.innerHTML);
});

// Decrement
test('decrements counter on click', () => {
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(<Counter />, div);

  const counter = document.body.querySelector('.counter');
  expect(counter.textContent).toBe('count: 0');

  // Interactions
  const decrement = document.querySelector('.decrement');
  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  });

  // decrement.click();
  decrement.dispatchEvent(decrementClickEvent);
  expect(counter.textContent).toBe('count: -1');

  console.log(document.body.innerHTML);
});
