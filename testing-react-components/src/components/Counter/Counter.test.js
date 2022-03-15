import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders count: 0 as text', () => {
  render(<Counter />);
  const count = screen.getByText('count: 0');
  expect(count).toBeInTheDocument();
});
