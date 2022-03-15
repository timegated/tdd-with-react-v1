import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders a numerical digit', () => {
  render(<Counter />);
  const count = screen.getByText(/d/i);
  expect(count).toBeInTheDocument();
});
