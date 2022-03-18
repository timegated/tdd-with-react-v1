import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

test('submitting the form calls onsubmit with username and password', () => {
  const handleSubmit = jest.fn();
  // let submittedData;
  // can mock this. built into jest.
  // const handleSubmit = (data) => submittedData = data;
  const username = 'chucknorris';
  const password = 'i need no password';
  render(<Form onSubmit={handleSubmit}/>);
  userEvent.type(screen.getByLabelText(/username/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(screen.getByRole('button', {name: /submit/i}));

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});