// import { render, screen } from '@testing-library/react';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './components/Counter';

beforeEach(() => {
  document.body.innerHTML = '';
});

// Increment
test('increments counter on click', () => {
  const { container } = render(<Counter />);
  const message = container.querySelector('.counter');
  const increment = container.querySelector('.increment');

  console.log(document.body.innerHTML);

  // Interactions
  fireEvent.click(increment);


  expect(message.textContent).toBe('count: 1');
});

// Decrement
test('decrements counter on click', () => {
  const { container } = render(<Counter />);
  const message = container.querySelector('.counter');
  const decrement = container.querySelector('.decrement');

  console.log(document.body.innerHTML);

  // Interactions
  fireEvent.click(decrement);


  expect(message.textContent).toBe('count: -1');
});
