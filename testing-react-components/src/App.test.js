// import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

test('renders counter component', () => {
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(<Counter />, div);

  const counter = document.querySelector('.counter');
  expect(counter.textContent).toBe('count: 0');
  console.log(document.body.innerHTML);

  // Interactions
  const increment = document.querySelector('.increment');
  const decrement = document.querySelector('.decrement');

  increment.click();
  expect(counter.textContent).toBe('count: 1');
  console.log(document.body.innerHTML);

  decrement.click();
  expect(counter.textContent).toBe('count: 0');

  console.log(document.body.innerHTML);
});
