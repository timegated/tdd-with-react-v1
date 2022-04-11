import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import { build, perBuild } from '@jackfranklin/test-data-bot';
import { rest } from 'msw';
import Form from './Form';

const buildLoginForm = build({
  fields: {
    username: perBuild(() => faker.internet.userName()),
    password: perBuild(() => faker.internet.password()),
  }
});


// Test object factory function
// function buildLoginForm(overrides) {
//   return {
//     username: faker.internet.userName(),
//     password: faker.internet.password(),
//     ...overrides,
//   };
// }

test('submitting the form calls onsubmit with username and password', () => {
  const handleSubmit = jest.fn();
  // let submittedData;
  // can mock this. built into jest.
  // const handleSubmit = (data) => submittedData = data;
  // static values, not super important
  const { username, password } = buildLoginForm();

  console.log({ username, password });

  render(<Form onSubmit={handleSubmit} />);
  userEvent.type(screen.getByLabelText(/username/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});